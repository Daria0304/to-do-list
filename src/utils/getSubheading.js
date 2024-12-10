export const getSubheading = (noOfTasks) => {
  switch (true) {
    case noOfTasks > 1:
      return `${noOfTasks} tasks`;
    case noOfTasks === 1:
      return `${noOfTasks} task`;
    case noOfTasks === 0:
    default:
      return "No tasks";
  }
};
