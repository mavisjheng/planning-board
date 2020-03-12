const stateData = {
  selectedTeam: "Clover",
  memberOrder: ["Alvin", "Chuck", "David", "Jack"],
  members: {
    Alvin: {
      id: "Alvin",
      day: "6",
      taskIds: ["task-1", "task-2"]
    },
    Chuck: {
      id: "Chuck",
      day: "7",
      taskIds: ["task-3", "task-4"]
    },
    David: {
      id: "David",
      day: "9",
      taskIds: ["task-5"]
    },
    Jack: {
      id: "Jack",
      day: "9",
      taskIds: ["task-6"]
    }
  },
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage", day: "3" },
    "task-2": { id: "task-2", content: "Watch my favorite show", day: "2" },
    "task-3": { id: "task-3", content: "Charge my phone", day: "5" },
    "task-4": { id: "task-4", content: "Cook dinner", day: "1" },
    "task-5": { id: "task-5", content: "Fix car", day: "9" },
    "task-6": { id: "task-6", content: "Meeting", day: "10" }
  }
};

export default stateData;
