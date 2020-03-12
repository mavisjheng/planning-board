import React, { Component } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Dropdown, Button, Badge } from "react-bootstrap";
import Task from "./task";
import { fourteenDays } from "./constants";
import "./style.css";

const Container = styled.div`
  margin: 8px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid lightgrey;
  width: 160px;
`;

const MemberInfoContainer = styled.div`
  width: 100%;
`;

const Name = styled.h5`
  margin-bottom: -6px;
  padding: 8px;
  text-align: center;
  color: SteelBlue;
`;

const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddTaskContainer = styled.div`
  float: right;
  clear: both;
  margin-right: -4px;
  margin-bottom: 4px;
`;

const TaskList = styled.div`
  width: 150px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? "lightblue" : "inherit"};
  min-height: 480px;
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
            <MemberInfoContainer>
              <Name {...provided.dragHandleProps}>{member}</Name>
              <DayContainer>
                {day && (
                  <Badge variant={remainingDays < 0 ? "danger" : "info"}>
                    {remainingDays} days left
                  </Badge>
                )}
                <Dropdown
                  onSelect={day => {
                    onSelectMemberDay(day, member);
                  }}
                >
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                    size="sm"
                    className="day-dropdown-button"
                  >
                    {day ? day : "Days"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey={-1}>Remove</Dropdown.Item>
                    {fourteenDays.map(number => (
                      <Dropdown.Item key={number} eventKey={number}>
                        {number}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </DayContainer>
            </MemberInfoContainer>
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
                  <AddTaskContainer>
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
                  </AddTaskContainer>
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
