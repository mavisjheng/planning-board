import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Form, Dropdown } from "react-bootstrap";

const Container = styled.div`
  border: none;
  border-radius: 5px;
  padding: 8px;
  background-color: ${props => (props.isDragging ? "lightyellow" : "white")};
  display: flex;
`;

const DropdownContainer = styled.div`
  align-items: center;
  display: flex;
  margin-right: -12px;
`;

export default class Column extends Component {
  render() {
    const {
      task,
      index,
      member,
      onSelectTaskDay,
      onDeleteTask,
      day,
      onTaskInputChange
    } = this.props;
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Form.Control
              as="textarea"
              value={task.content}
              onChange={event => {
                onTaskInputChange(event.target.value, task.id);
              }}
            />
            <DropdownContainer>
              <Dropdown
                onSelect={day => {
                  day < 0
                    ? onDeleteTask(task.id, day, member)
                    : onSelectTaskDay(task.id, day, member);
                }}
              >
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                  size="sm"
                  className="custom-task-dropdown-button"
                >
                  {day}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey={-1}>-1</Dropdown.Item>
                  <Dropdown.Item eventKey={0}>0</Dropdown.Item>
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
            </DropdownContainer>
          </Container>
        )}
      </Draggable>
    );
  }
}
