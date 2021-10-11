import React, { useState, useRef } from "react";
import UserPool from "../UserPool";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import { FaLock, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #448800;
  color: white;

  &:hover {
    background-color: #449900;
    color: white;
  }
`;

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputRef = useRef(null);

  const hideFaIcon = () => {
    const icon = inputRef.current;
    icon.className = "hide-input-icon";
    console.log("success");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <Form onSubmit={onSubmit} className="signup-form">
      <div className="wrap-input100">
        <Form.Group className="mb-3">
          <FaEnvelope className="fontawesome-icon" />
          <Form.Label htmlFor="email" className="form-label">
            Email Address:
          </Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="signup-field input100"
            placeholder="Please enter your Email"
          />
        </Form.Group>
      </div>
      <div className="wrap-input100">
        <Form.Group className="mb-3">
          <FaLock className="fontawesome-icon" />
          <Form.Label htmlFor="password" className="form-label">
            Password:
          </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="signup-field input100"
            placeholder="Please enter your Password"
          />
        </Form.Group>
      </div>
      <div className="wrap-input100">
        <Form.Group className="mb-3">
          <FaLock className="fontawesome-icon" />
          <Form.Label htmlFor="password" className="form-label">
            Confirm Password:
          </Form.Label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="signup-field input100 form-control"
            placeholder="Please confirm your Password"
          />
        </Form.Group>
      </div>
      <StyledButton type="submit" className="btn submit-btn">
        Sign Up
      </StyledButton>
    </Form>
  );
}
