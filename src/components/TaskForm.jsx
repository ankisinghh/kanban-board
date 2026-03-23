// Form used for both adding and editing tasks
import { useEffect, useState } from "react";

export default function TaskForm({ saveTask, editingTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDesc(editingTask.description);
    }
  }, [editingTask]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent empty titles from being added
        saveTask(title, desc);
        setTitle("");
        setDesc("");
      }}
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={inputStyle}
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        style={inputStyle}
      />
      <button style={btnStyle}>
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  background: "#1e293b",
  color: "white",
};

const btnStyle = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#38bdf8",
  color: "black",
  cursor: "pointer",
};