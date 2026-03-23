// Column component represents each column in the board (To Do, In Progress, Completed).
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

export default function Column({
  status,
  tasks,
  visible,
  setVisibleMap, 
  setEditingTask,
  deleteTask,
}) {
  const { setNodeRef } = useDroppable({ id: status });

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <=    // Handles infinite scroll inside a column
      e.target.clientHeight + 20;

    if (bottom) {
      setVisibleMap((prev) => ({
        ...prev,
        [status]: prev[status] + 5,
      }));
    }
  };

  return (
    <div
      ref={setNodeRef}
      onScroll={handleScroll}
      style={{
        flex: 1,
        padding: "15px",
        borderRadius: "12px",
        height: "500px",
        overflowY: "auto",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        {status.toUpperCase()} ({tasks.length})
      </h3>

      {tasks.slice(0, visible).map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          setEditingTask={setEditingTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}