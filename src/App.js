import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Home from './Home';
import Landing from './Landing';

// RemoveTrailingSlash component
function RemoveTrailingSlash() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname.endsWith("/")) {
      navigate(location.pathname.slice(0, -1) + location.search, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <RemoveTrailingSlash /> {/* Include it here */}
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
