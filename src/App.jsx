import ShapeGrid from "./components/ShapeGrid";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", position: "relative" }}>
      
      {/* BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: "#000", // IMPORTANT FIX
        }}
      >
        <ShapeGrid
          speed={0.5}
          squareSize={45}
          direction="diagonal"
          borderColor="#2F293A"
          hoverFillColor="#222222"
          shape="square"
          hoverTrailAmount={8}
        />
      </div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 2, color: "white" }}>
        <h1 style={{ textAlign: "center", marginTop: "40vh" }}>
          Kanika Sharma
        </h1>
      </div>
      <h1>heheh</h1>

    </div>
  );
}

export default App;