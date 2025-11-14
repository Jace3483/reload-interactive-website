import { useEffect } from "react";
import { Container, Navbar, Nav, Button, Row, Col, Card } from "react-bootstrap";

function Landing() {
  useEffect(() => {
    document.title = "Reload Interactive Studios";
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">Reload Interactive</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#games">Games</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5" style={{ minHeight: "80vh" }}>
        <Container>
          <h1 className="display-4 fw-bold">Welcome to Reload Interactive Studios</h1>
          <p className="lead">Explore our worlds, play our games, and join the adventure.</p>
          <Button variant="primary" size="lg" href="#games">
            View Games
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Immersive Worlds</Card.Title>
                <Card.Text>
                  Dive into our detailed and immersive game universes designed for players of all ages.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Innovative Gameplay</Card.Title>
                <Card.Text>
                  Experience cutting-edge gameplay mechanics and revolutionary game design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Community Driven</Card.Title>
                <Card.Text>
                  Join a passionate community of players and developers shaping the future of our games.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call-to-Action Section */}
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h2>Join Reload Interactive Today</h2>
          <p>Create an account to access our games and be part of the adventure.</p>
          <Button variant="light" size="lg" href="#signup">
            Sign Up Now
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
