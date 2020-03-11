import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Form, Dropdown } from "react-bootstrap";
import { fourteenDays } from "./constants";

const Container = styled.div`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 8px;
  background-color: ${props => (props.isDragging ? "lightyellow" : "white")};
`;

const DropdownContainer = styled.div`
  float: right;
  margin-top: -2px;
  margin-bottom: 8px;
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
              className="task-form-textarea"
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
                  size="sm"
                  className="day-dropdown-button"
                >
                  {day}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {fourteenDays.map(number => (
                    <Dropdown.Item key={number} eventKey={number}>
                      {number}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </DropdownContainer>
          </Container>
        )}
      </Draggable>
    );
  }
}
