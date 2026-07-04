import ShapeGrid from "./components/ShapeGrid";
import TargetCursor from "./components/TargetCursor";

function App() {
  const navItems = ["About", "Projects", "Experience", "Skills", "Contact"];

  return (
    <div style={{ minHeight: "100vh", background: "#000", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: "#000",
          pointerEvents: "auto",
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

      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          padding: "24px 24px 80px",
          pointerEvents: "none",
          minHeight: "100vh",
          fontFamily: 'Inter, "SF Pro Display", "Segoe UI", sans-serif',
          display: "block",
          background: "transparent",
        }}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn hoverDuration={0.2} />

        <div
          style={{
            maxWidth: "1200px",
            margin: " auto",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            paddingTop: "20px",
          }}
        >
          <nav
            style={{
              alignSelf: "center",
              marginTop: "8px",
              padding: "10px 10px",
              borderRadius: "999px",
              background: "rgba(10, 14, 22, 0.66)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 35px rgba(0, 0, 0, 0.22)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              pointerEvents: "auto",
            }}
          >
            <div style={{ display: "flex", gap: "60px", alignItems: "center", justifyContent: "center" }}>
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "rgba(226, 232, 240, 0.82)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    letterSpacing: "0.02em",
                    padding: "10px 6px",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <main
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.04fr) minmax(320px, 0.96fr)",
              gap: "500px",
              alignItems: "start",
              paddingTop: "250px",
              flex: 1,
              // paddingTop: "-1px",
            }}
          >
            <section style={{ maxWidth: "400px", pointerEvents: "auto" }}>
              <div
                style={{
                  color: "rgba(173, 186, 205, 0.88)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Hello, I&apos;m
              </div>

              <h1
                style={{
                  fontSize: "clamp(3rem, 6.5vw, 5.6rem)",
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  margin: "0 0 24px",
                  color: "#f8fbff",
                }}
              >
                Kanika Sharma
              </h1>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
                {[
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Open Source Contributor",
                ].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      border: "1px solid rgba(139, 180, 255, 0.28)",
                      borderRadius: "999px",
                      padding: "8px 14px",
                      color: "rgba(198, 218, 255, 0.9)",
                      fontSize: "0.9rem",
                      background: "rgba(255,255,255,0.025)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: "1.04rem",
                  lineHeight: 1.75,
                  color: "rgba(208, 216, 228, 0.78)",
                  margin: "0 0 28px",
                  maxWidth: "560px",
                }}
              >
                I design and build reliable, production-quality software—from interactive user
                interfaces to scalable backend systems.
              </p>

              <button
                type="button"
                className="cursor-target"
                style={{
                  background: "rgba(124, 173, 255, 0.14)",
                  color: "#eaf3ff",
                  fontSize: "0.98rem",
                  fontWeight: 600,
                  padding: "13px 20px",
                  border: "1px solid rgba(140, 182, 255, 0.32)",
                  borderRadius: "999px",
                  cursor: "pointer",
                  boxShadow: "0 10px 26px rgba(67, 112, 192, 0.16)",
                  pointerEvents: "auto",
                }}
              >
                View Projects
              </button>
            </section>

            <section style={{ display: "flex", justifyContent: "center", pointerEvents: "auto" }}>
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "420px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "36px 44px 50px 66px",
                    border: "1px solid rgba(122, 166, 255, 0.36)",
                    borderRadius: "36px",
                    transform: "rotate(-9deg)",
                    background: "rgba(15, 23, 36, 0.28)",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.24)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "78px 28px 88px 46px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "30px",
                    background: "rgba(255,255,255,0.03)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "70px",
                    bottom: "86px",
                    width: "100px",
                    height: "100px",
                    border: "1px solid rgba(122, 166, 255, 0.34)",
                    borderRadius: "24px",
                    background: "rgba(255,255,255,0.025)",
                    boxShadow: "0 0 38px rgba(102, 152, 255, 0.12)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "74px",
                    top: "92px",
                    width: "82px",
                    height: "82px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "174px",
                    top: "140px",
                    width: "86px",
                    height: "1px",
                    background: "rgba(255,255,255,0.2)",
                    transform: "rotate(-12deg)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "158px",
                    bottom: "118px",
                    width: "116px",
                    height: "1px",
                    background: "rgba(255,255,255,0.16)",
                    transform: "rotate(10deg)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "222px",
                    top: "90px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "rgba(186, 220, 255, 0.95)",
                    boxShadow: "0 0 22px rgba(186, 220, 255, 0.75)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "96px",
                    bottom: "152px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "rgba(211, 230, 255, 0.9)",
                    boxShadow: "0 0 16px rgba(211, 230, 255, 0.7)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "126px",
                    bottom: "64px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "rgba(211, 230, 255, 0.9)",
                    boxShadow: "0 0 16px rgba(211, 230, 255, 0.7)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "112px",
                    height: "112px",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid rgba(188, 216, 255, 0.24)",
                    borderRadius: "50%",
                    boxShadow: "inset 0 0 27px rgba(188, 216, 255, 0.08)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "32px",
                    height: "32px",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid rgba(188, 216, 255, 0.3)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "86px",
                    height: "1px",
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    background: "rgba(188, 216, 255, 0.24)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "86px",
                    height: "1px",
                    transform: "translate(-50%, -50%) rotate(-45deg)",
                    background: "rgba(188, 216, 255, 0.24)",
                  }}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;