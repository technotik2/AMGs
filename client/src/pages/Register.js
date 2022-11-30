import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [registerCredentials, setRegisterCredentials] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerCredentials),
    };
    await fetch("http://localhost:3000/api/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          let token = data.data;
          localStorage.setItem("auth-token", JSON.stringify(token));
          navigate("/");
        }
        if (data.status === "username in use") {
          alert(data.error);
        }
      });
    setRegisterCredentials({ username: "", password: "" });
    // navigate("/login");
  };
  return (
    <div style={{ height: "80vh" }}>
      <RegisterForm>
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter UserName"
              onChange={(e) =>
                setRegisterCredentials({
                  ...registerCredentials,
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
                setRegisterCredentials({
                  ...registerCredentials,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </RegisterForm>
    </div>
  );
}

const RegisterForm = styled.div`
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
export default Register;
