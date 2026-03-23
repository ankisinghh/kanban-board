// TaskCard component represents each task card in the columns, allowing users to edit, delete, and drag tasks.
import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({ task, setEditingTask, deleteTask }) {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : "",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        transition: "0.2s",
      }}
    >
      <div
        {...listeners}
        {...attributes}
        style={{
          cursor: "grab",
          fontSize: "12px",
          color: "#94a3b8",
        }}
      >
        ⠿ drag
      </div>

      <h4 style={{ margin: "5px 0" }}>{task.title}</h4>
      <p style={{ fontSize: "14px", color: "#cbd5f5" }}>
        {task.description}
      </p>

      <div style={{ display: "flex", gap: "8px" }}>  
        <button style={editBtn} onClick={() => setEditingTask(task)}> 
          Edit 
        </button> 

        <button
          style={deleteBtn}   // Delete removes task from board
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const editBtn = {
  background: "#22c55e",
  border: "none",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ef4444",
  border: "none",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer",
};