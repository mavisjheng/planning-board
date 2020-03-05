import React, { Component } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Dropdown, Button, Alert } from "react-bootstrap";
import Task from "./task";
import "./custom.css";

const Container = styled.div`
  margin: 8px;
  background-color: white;
  border-radius: 4px;
  width: 220px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
`;

const Day = styled.div`
  float: right;
  margin-top: -24px;
  margin-bottom: -16px;
`;

const Name = styled.h4`
  padding: 8px;
  text-align: center;
  color: SteelBlue;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? "lightblue" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    const {
      tasks,
      onSelectTaskDay,
      member,
      onTaskInputChange,
      onDeleteTask
    } = this.props;
    return tasks.map((task, index) => (
      <Task
        key={task.id}
        task={task}
        index={index}
        day={task.day}
        member={member}
        onSelectTaskDay={onSelectTaskDay}
        onTaskInputChange={onTaskInputChange}
        onDeleteTask={onDeleteTask}
      />
    ));
  }
}

export default class MemberTask extends Component {
  render() {
    const {
      member,
      index,
      tasks,
      onSelectTaskDay,
      onAddTask,
      onTaskInputChange,
      overloading,
      onSelectMemberDay,
      onDeleteTask,
      day
    } = this.props;

    let remainingDays = day;
    tasks.forEach(task => {
      remainingDays -= task.day;
    });

    return (
      <Draggable draggableId={member} index={index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <div>
              <Name
                {...provided.dragHandleProps}
                style={{
                  marginBottom: `${overloading ? "-4px" : "0"}`
                }}
              >
                {member}
              </Name>
              {day && (
                <Alert
                  variant={overloading ? "danger" : "info"}
                  className={"custom-overloaded-alert"}
                >
                  {remainingDays} days left
                </Alert>
              )}
              <Day>
                <Dropdown
                  onSelect={day => {
                    onSelectMemberDay(day, member);
                  }}
                >
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    size="sm"
                    className={
                      day
                        ? "custom-dropdown-button"
                        : "custom-task-dropdown-button"
                    }
                  >
                    {day ? day : "Days"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey={-1}>-1</Dropdown.Item>
                    <Dropdown.Item eventKey={1}>1</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>2</Dropdown.Item>
                    <Dropdown.Item eventKey={3}>3</Dropdown.Item>
                    <Dropdown.Item eventKey={4}>4</Dropdown.Item>
                    <Dropdown.Item eventKey={5}>5</Dropdown.Item>
                    <Dropdown.Item eventKey={6}>6</Dropdown.Item>
                    <Dropdown.Item eventKey={7}>7</Dropdown.Item>
                    <Dropdown.Item eventKey={8}>8</Dropdown.Item>
                    <Dropdown.Item eventKey={9}>9</Dropdown.Item>
                    <Dropdown.Item eventKey={10}>10</Dropdown.Item>
                    <Dropdown.Item eventKey={11}>11</Dropdown.Item>
                    <Dropdown.Item eventKey={12}>12</Dropdown.Item>
                    <Dropdown.Item eventKey={13}>13</Dropdown.Item>
                    <Dropdown.Item eventKey={14}>14</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Day>
            </div>
            <Droppable droppableId={member} type="task">
              {(provided, snapshot) => (
                <TaskList
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList
                    tasks={tasks}
                    onSelectTaskDay={onSelectTaskDay}
                    member={member}
                    onTaskInputChange={onTaskInputChange}
                    onDeleteTask={onDeleteTask}
                  />
                  <div style={{ marginLeft: "8px" }}>
                    {day && (
                      <Button
                        variant="light"
                        size="sm"
                        className="add-task-button"
                        onClick={onAddTask}
                      >
                        Add Task
                      </Button>
                    )}
                  </div>
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
