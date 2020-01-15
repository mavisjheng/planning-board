import React, { Component, PureComponent, Fragment } from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import teams from "./data/teams";
import MemberTask from "./member-task";
import TeamList from "./team-list";

const Container = styled.div`
  display: flex;
  width: calc(100% - 160px);
`;

class InnerList extends PureComponent {
  render() {
    const {
      index,
      member,
      tasks,
      overloading,
      onAddTask,
      onSelectMemberDay,
      onSelectTaskDay,
      onTaskInputChange,
      onDeleteTask
    } = this.props;
    return (
      <MemberTask
        index={index}
        member={member}
        overloading={overloading}
        onAddTask={onAddTask}
        tasks={tasks}
        onSelectMemberDay={onSelectMemberDay}
        onSelectTaskDay={onSelectTaskDay}
        onDeleteTask={onDeleteTask}
        onTaskInputChange={onTaskInputChange}
      />
    );
  }
}

class App extends Component {
  allTasks = 0;
  state = {
    selectedTeam: "",
    memberOrder: [],
    members: {},
    tasks: {}
  };

  onDragEnd = result => {
    // const { memberOrder } = this.state;
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

    const sourceMemberDays = Number(this.state.members[start.id].day);
    let sourceTaskDays = 0;
    startTaskIds.forEach(taskId => {
      sourceTaskDays += Number(this.state.tasks[taskId].day);
    });

    const newStart = {
      ...start,
      taskIds: startTaskIds,
      overloading: sourceTaskDays > sourceMemberDays
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const destinationMemberDays = Number(this.state.members[finish.id].day);
    let destinationTaskDays = 0;
    finishTaskIds.forEach(taskId => {
      destinationTaskDays += Number(this.state.tasks[taskId].day);
    });

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
      overloading: destinationTaskDays > destinationMemberDays
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
    const taskAmount = Object.keys(this.state.tasks).length;

    // count if overloading
    let allTaskDays = 0;
    const memberDay = Number(day);
    this.state.members[member].taskIds.forEach(taskId => {
      allTaskDays += Number(this.state.tasks[taskId].day);
    });

    if (
      !previousSelectedDay &&
      this.state.members[member].taskIds.length === 0
    ) {
      this.allTasks++;
      this.setState({
        ...this.state,
        tasks: {
          ...this.state.tasks,
          [`task-${taskAmount + 1}`]: {
            id: `task-${taskAmount + 1}`,
            content: "",
            day: null
          }
        },
        members: {
          ...this.state.members,
          [member]: {
            ...this.state.members[member],
            day,
            taskIds: [`task-${taskAmount + 1}`],
            overloading: allTaskDays > memberDay
          }
        }
      });
    } else {
      const newMember = {
        ...this.state.members[member],
        day,
        overloading: allTaskDays > memberDay
      };

      const newMembers = {
        ...this.state.members,
        [member]: newMember
      };

      this.setState({ members: newMembers });
    }
  };

  onDeleteTask = (editedTaskId, day, member) => {
    console.log(editedTaskId);

    const newTaskIds = Array.from(this.state.members[member].taskIds);
    const index = newTaskIds.indexOf(editedTaskId);
    newTaskIds.splice(index, 1);

    delete this.state.tasks[editedTaskId];

    // count if overloading
    const memberDay = Number(this.state.members[member].day);
    let allTaskDays = 0;
    newTaskIds.forEach(taskId => {
      allTaskDays += Number(this.state.tasks[taskId].day);
    });

    this.setState({
      ...this.state,
      tasks: this.state.tasks,
      members: {
        ...this.state.members,
        [member]: {
          ...this.state.members[member],
          taskIds: newTaskIds,
          overloading: allTaskDays > memberDay
        }
      }
    });
  };

  onSelectTaskDay = (editedTaskId, day, member) => {
    const memberDay = Number(this.state.members[member].day);
    let allTaskDays = Number(day);

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

    // count if overloading
    this.state.members[member].taskIds.forEach(taskId => {
      if (editedTaskId !== taskId) {
        allTaskDays += Number(this.state.tasks[taskId].day);
      }
    });

    const newMember = {
      ...this.state.members[member],
      overloading: allTaskDays > memberDay
    };
    const newMembers = {
      ...this.state.members,
      [member]: newMember
    };
    this.setState({ members: newMembers });
  };

  onAddTask = member => {
    this.allTasks++;
    const newTaskIds = Array.from(this.state.members[member].taskIds);
    // const taskAmount = Object.keys(this.state.tasks).length;
    const taskAmount = this.allTasks;
    newTaskIds.push(`task-${taskAmount + 1}`);

    this.setState({
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [`task-${taskAmount + 1}`]: {
          id: `task-${taskAmount + 1}`,
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

  render() {
    const { selectedTeam, memberOrder, members, tasks } = this.state;
    console.log(this.allTasks);
    return (
      <Fragment>
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
                      <InnerList
                        key={`${selectedTeam}-${member}`}
                        index={index}
                        member={member}
                        overloading={members[member].overloading}
                        onAddTask={() => this.onAddTask(member)}
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
        <TeamList
          onSelect={team => this.onTeamSelect(team)}
          selectedTeam={selectedTeam}
        />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
