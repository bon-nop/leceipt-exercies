import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Routes, Route } from "react-router-dom";
import Question1 from "./pages/Question1";
import Counter from "./pages/Counter";
import Question3 from "./pages/Question3";

function AppHeader() {
  return (
    <>
      <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={viteLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="px-3" href="/">
                Question 1
              </Nav.Link>
              <Nav.Link className="px-3" href="/counter">
                Counter Question
              </Nav.Link>
              <Nav.Link className="px-3" href="/question-3">
                Question 3
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

function App() {
  // const [count, setCount] = useState(0);
  // const [count, setCount] = useState({ type: 'even', count: 0 });

  return (
    <>
      <Routes>
        <Route element={<AppHeader />}>
          <Route path="/" element={<Question1 />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/question-3" element={<Question3 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
