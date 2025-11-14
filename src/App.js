function App() {
  return (
    <div>
      {/* Simple Navbar */}
      <nav style={{
        background: "#111",
        color: "#fff",
        padding: "15px",
        fontSize: "20px"
      }}>
        Reload Interactive
      </nav>

      {/* Main Content */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to Reload Interactive Studios</h1>
        <p>Your home for amazing games and experiences.</p>

        <button style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer"
        }}>
          Learn More
        </button>
      </div>



      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>




    </div>
  );
}

export default App;
