// Generating dummy tasks for initial demo

// Distributing tasks across all columns evenly

export const seedTasks = Array.from({ length: 60 }, (_, i) => {
  const statusCycle = ["todo", "in-progress", "completed"];

  return {
    id: "task-" + i,
    title: `Task ${i + 1}`,
    description: `Sample task ${i + 1}`,
    status: statusCycle[i % 3],
    createdAt: Date.now() - i * 100000,
    updatedAt: Date.now(),
  };
});

// Helps test pagination and scrolling behavior