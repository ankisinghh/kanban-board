// Global state for tasks and columns is handled by the main board component.
import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Column from "./Column";
import TaskForm from "./TaskForm";
import { seedTasks } from "../data/seed";   // Stores all tasks (loaded from localStorage or seed data);

const statuses = ["todo", "in-progress", "completed"]; 

export default function Board() {
  const [tasks, setTasks] = useState([]);
  const [visibleMap, setVisibleMap] = useState({
    todo: 10,
    "in-progress": 10,
    completed: 10,
  });
  const [editingTask, setEditingTask] = useState(null);

  // Load data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved?.length) {
      setTasks(saved);
    } else {
      setTasks(seedTasks);
      localStorage.setItem("tasks", JSON.stringify(seedTasks));
    }
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Add/Edit
  const saveTask = (title, desc) => {
    if (!title.trim()) return;

    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id
            ? { ...t, title, description: desc }
            : t
        )
      );
      setEditingTask(null);
    } else {
      setTasks((prev) => [
        {
          id: "task-" + Date.now(),
          title,
          description: desc,
          status: "todo",
        },
        ...prev,
      ]);
    }
  };

  //  DELETE the task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Drag the task from one column to another and update the status of the task accordingly.
  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    setTasks((prev) =>
      prev.map((t) =>
        t.id === active.id ? { ...t, status: over.id } : t
      )
    );
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <TaskForm saveTask={saveTask} editingTask={editingTask} />

      <DndContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "20px" }}>
          {statuses.map((status) => (
            <Column
              key={status}
              status={status}
              tasks={tasks.filter((t) => t.status === status)}
              visible={visibleMap[status]}
              setVisibleMap={setVisibleMap}
              setEditingTask={setEditingTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}