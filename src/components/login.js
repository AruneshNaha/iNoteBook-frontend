import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authentication/AuthContext";

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const host = "http://localhost:5000";
  const context = useContext(AuthContext);
  const { authenticate, authToken } = context;
  const navigate = useNavigate()

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const auth = await response.json();
    const statusCode = await response.status
    console.log(statusCode)
    localStorage.setItem('token', auth.authtoken)
    console.log(authToken)
    authenticate()
    navigate("/")
  };

  return (
    <div style={{ margin: "35px 0px", marginTop: "100px" }}>
      <h1>Login to iNotebook</h1>

      <div className="my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
