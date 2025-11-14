import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={{
          background: "#111",
          color: "#fff",
          padding: "15px",
          fontSize: "20px"
        }}>
          Reload Interactive |{" "}
          <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Landing</Link>
          <Link to="/home" style={{ color: "#fff" }}>Home</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
