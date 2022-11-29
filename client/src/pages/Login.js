import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginCredentials);
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
