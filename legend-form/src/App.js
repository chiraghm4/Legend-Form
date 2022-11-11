import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Navigation from "./components/navigation";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [position, setPosition] = useState("left");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Navigation />
      <Container className="mt-4 form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {console.log(username)}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {username.length === 0 || password.length <= 6 ? (
            <Button
              className="form-btn mt-3"
              variant="primary"
              type="submit"
              onMouseOver={() =>
                setPosition(() => (position === "left" ? "right" : "left"))
              }
              style={{ width: "15rem", float: `${position}` }}
            >
              Submit
            </Button>
          ) : (
            <Container className="text-center">
              <Button
                className="mt-3"
                style={{ width: "15rem" }}
                variant="success"
              >
                submit
              </Button>
            </Container>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default App;
