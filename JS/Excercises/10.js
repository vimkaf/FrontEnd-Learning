/**
 * Create a function that takes an array of tasks and prints tasks that are overdue.
 * Each task has properties title and dueDate.
 * Assume dueDate is a string in the format "YYYY-MM-DD".
 * const tasks = [
  { title: 'Submit report', dueDate: '2024-07-01' },
  { title: 'Pay bills', dueDate: '2024-08-05' },
  { title: 'Meeting with client', dueDate: '2024-08-10' },
  { title: 'Complete project', dueDate: '2024-07-30' },
];
 */

const tasks = [
  { title: "Submit report", dueDate: "2024-07-01" },
  { title: "Pay bills", dueDate: "2024-08-05" },
  { title: "Meeting with client", dueDate: "2024-08-10" },
  { title: "Complete project", dueDate: "2024-09-30" },
];

function printOverdueTasks(tasks) {
  const today = new Date();

  tasks.forEach((task) => {
    const dueDate = new Date(task.dueDate);
    if (dueDate < today) {
      console.log(`Overdue Task: ${task.title}, Due Date: ${task.dueDate}`);
    }
  });
}

printOverdueTasks(tasks);
