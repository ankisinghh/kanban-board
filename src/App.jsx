import Board from "./components/Board"; 
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Kanban Board
      </h1>

      <Board />
    </div>
  );
}