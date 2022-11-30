import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { post } from "jquery";

function Login() {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    };
    await fetch("http://localhost:3000/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          let token = data.data;
          localStorage.setItem("auth-token", JSON.stringify(token));
          navigate("/");

          window.location.reload();
        }
        if (data.status === "error") {
          alert("Invalid username/password!");
        }
      });

    setLoginCredentials({
      username: "",
      password: "",
    });
  };
  return (
    <div style={{ height: "80vh" }}>
      <LoginForm>
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              onChange={(e) =>
                setLoginCredentials({
                  ...loginCredentials,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) =>
                setLoginCredentials({
                  ...loginCredentials,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
      </LoginForm>
    </div>
  );
}

const LoginForm = styled.div`
  width: 25vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5vh;
  padding-bottom: 50px;
  background-color: #eeeeee;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

export default Login;
