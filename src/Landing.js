import { useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  useEffect(() => {
    document.title = "Reload Interactive";
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{fontWeight: 900}}>Reload Interactive</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link href="#games">Games</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        className="bg-dark text-white text-center"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold">Welcome to Reload Interactive</h1>
          <p className="lead">Explore our worlds, play our games, and join the adventure.</p>
          <Button variant="primary" size="lg" href="#games">
            View Games
          </Button>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          &copy; {new Date().getFullYear()} Reload Interactive Studios. All Rights Reserved.
        </Container>
      </footer>
    </div>
  );
}

export default Landing;
