import React, { Component } from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import teams from "./data/teams";
import MemberTask from "./member-task";
import Toolbar from "./toolbar";
import { genRandomString } from "./utils";

const Container = styled.div`
  display: flex;
  overflow: auto;
  margin-right: 8px;
`;

class App extends Component {
  state = localStorage.getItem("planningBoard")
    ? JSON.parse(localStorage.getItem("planningBoard"))
    : {
        selectedTeam: "",
        memberOrder: [],
        members: {},
        tasks: {}
      };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      localStorage.setItem("planningBoard", JSON.stringify(this.state));
    }
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // switch member
    if (type === "member") {
      const newMemberOrder = Array.from(this.state.memberOrder);
      newMemberOrder.splice(source.index, 1);
      newMemberOrder.splice(destination.index, 0, draggableId);
      this.setState({ memberOrder: newMemberOrder });
      return;
    }

    // switch task for same member
    const start = this.state.members[source.droppableId];
    const finish = this.state.members[destination.droppableId];

    if (start === finish) {
      const member = this.state.members[source.droppableId];
      const newTaskIds = Array.from(member.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newMember = {
        ...member,
        taskIds: newTaskIds
      };

      const newMembers = {
        ...this.state.members,
        [source.droppableId]: newMember
      };

      this.setState({ members: newMembers });
      return;
    }

    // switch task for different member
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newMembers = {
      ...this.state.members,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    };

    this.setState({ members: newMembers });
  };

  onTeamSelect = teamName => {
    const newMembers = teams[teamName].reduce(function(map, obj) {
      map[obj] = {
        id: obj,
        day: null,
        taskIds: []
      };
      return map;
    }, {});

    this.setState({
      selectedTeam: teamName,
      memberOrder: teams[teamName],
      members: newMembers
    });
  };

  onSelectMemberDay = (day, member, previousSelectedDay) => {
    const taskString = genRandomString();
    const memberDay = Number(day);

    // if day is -1, remove member and all his tasks
    if (memberDay < 0) {
      const newMemberOrder = this.state.memberOrder.filter(
        name => name !== member
      );
      const memberTasks = this.state.members[member].taskIds;
      memberTasks.forEach(taskId => {
        delete this.state.tasks[taskId];
      });

      delete this.state.members[member];

      this.setState({
        members: this.state.members,
        memberOrder: newMemberOrder,
        tasks: this.state.tasks
      });

      return;
    }

    if (
      !previousSelectedDay &&
      this.state.members[member].taskIds.length === 0
    ) {
      this.setState({
        ...this.state,
        tasks: {
          ...this.state.tasks,
          [taskString]: {
            id: taskString,
            content: "",
            day: null
          }
        },
        members: {
          ...this.state.members,
          [member]: {
            ...this.state.members[member],
            day,
            taskIds: [taskString]
          }
        }
      });
    } else {
      const newMember = {
        ...this.state.members[member],
        day
      };

      const newMembers = {
        ...this.state.members,
        [member]: newMember
      };

      this.setState({ members: newMembers });
    }
  };

  onDeleteTask = (editedTaskId, day, member) => {
    const newTaskIds = Array.from(this.state.members[member].taskIds);
    const index = newTaskIds.indexOf(editedTaskId);
    newTaskIds.splice(index, 1);

    delete this.state.tasks[editedTaskId];

    this.setState({
      ...this.state,
      tasks: this.state.tasks,
      members: {
        ...this.state.members,
        [member]: {
          ...this.state.members[member],
          taskIds: newTaskIds
        }
      }
    });
  };

  onSelectTaskDay = (editedTaskId, day, member) => {
    const newTasks = {
      ...this.state.tasks,
      [editedTaskId]: {
        ...this.state.tasks[editedTaskId],
        day
      }
    };
    this.setState({
      ...this.state,
      tasks: newTasks
    });

    const newMember = {
      ...this.state.members[member]
    };
    const newMembers = {
      ...this.state.members,
      [member]: newMember
    };
    this.setState({ members: newMembers });
  };

  onAddTask = member => {
    const newTaskIds = Array.from(this.state.members[member].taskIds);
    const taskString = genRandomString();
    newTaskIds.push(taskString);

    this.setState({
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [taskString]: {
          id: taskString,
          content: "",
          day: null
        }
      },
      members: {
        ...this.state.members,
        [member]: {
          ...this.state.members[member],
          taskIds: newTaskIds
        }
      }
    });
  };

  onTaskInputChange = (value, taskId) => {
    const newTasks = {
      ...this.state.tasks,
      [taskId]: {
        ...this.state.tasks[taskId],
        content: value
      }
    };
    this.setState({
      ...this.state,
      tasks: newTasks
    });
  };

  onClickImport = () => {
    const inputDOM = document.createElement("input");
    inputDOM.type = "file";
    inputDOM.onchange = this.readImportedTask;
    inputDOM.click();
  };

  onAddMember = name => {
    const newMemberOrder = Array.from(this.state.memberOrder);
    newMemberOrder.push(name);
    this.setState({
      memberOrder: newMemberOrder,
      members: {
        ...this.state.members,
        [name]: {
          id: name,
          day: null,
          taskIds: []
        }
      }
    })
  }

  readImportedTask = evt => {
    const file = evt.target.files[0];
    const textType = /text.*/;
    if (file.type.match(textType)) {
      const reader = new FileReader();
      reader.onload = e => {
        const content = e.target.result;
        this.setState(JSON.parse(content));
      };
      reader.readAsText(file);
    } else {
      alert("Unsupported file format");
    }
  };

  render() {
    const { selectedTeam, memberOrder, members, tasks } = this.state;

    return (
      <>
        <Toolbar
          onClickImport={this.onClickImport}
          onSelectTeam={team => this.onTeamSelect(team)}
          selectedTeam={selectedTeam}
          onAddMember={this.onAddMember}
        />
        {selectedTeam && (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
              droppableId="team-member-list"
              direction="horizontal"
              type="member"
            >
              {provided => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                  {memberOrder.map((member, index) => {
                    return (
                      <MemberTask
                        key={`${selectedTeam}-${member}`}
                        index={index}
                        member={member}
                        onAddTask={() => this.onAddTask(member)}
                        day={members[member].day}
                        tasks={members[member].taskIds.map(
                          taskId => tasks[taskId]
                        )}
                        onSelectMemberDay={(day, member) =>
                          this.onSelectMemberDay(
                            day,
                            member,
                            members[member].day
                          )
                        }
                        onSelectTaskDay={(taskId, day, member) =>
                          this.onSelectTaskDay(taskId, day, member)
                        }
                        onDeleteTask={(taskId, day, member) =>
                          this.onDeleteTask(taskId, day, member)
                        }
                        onTaskInputChange={(value, taskId) =>
                          this.onTaskInputChange(value, taskId)
                        }
                      />
                    );
                  })}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
