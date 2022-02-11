import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authentication/AuthContext";

export const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
  });
  const host = "http://localhost:5000";

  const context = useContext(AuthContext);
  const { authenticate } = context;
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
      }),
    });

    const auth = await response.json();
    localStorage.setItem("token", auth.authtoken);
    authenticate();
    navigate("/");
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
            <label htmlFor="exampleInputEmail1">Your Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              value={credentials.name}
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
