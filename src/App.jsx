import ShapeGrid from "./components/ShapeGrid";
import TargetCursor from "./components/TargetCursor";

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
          hoverTrailAmount={20}
        />
      </div>
      {/* CUSTOM CURSOR */}
      <div
      style={{
        position: "relative",
        zIndex: 2,
        color: "white",
        padding: "100px"
        }}
      >
      <TargetCursor
    spinDuration={2}
    hideDefaultCursor
    parallaxOn
    hoverDuration={0.2}
      />

    <h1>Kanika Sharma</h1>

    <button className="cursor-target" style={{
    background: "#090713",
    color: "#585166",
    fontSize: "2rem",
    fontWeight: "80",
    padding: "20px 25px",
    border: "3px dashed #393345",
    borderRadius: "15px",
    marginTop: "40px",
    }}>
    Portfolio
    </button>
</div>

    </div>
  );
}

export default App;