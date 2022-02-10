import React, { useContext, useState } from 'react'
import AuthContext from '../context/authentication/AuthContext';

export const Signup = () => {
  const [credentials, setCredentials] = useState({ email: "", name: "", password: "" });
  const context = useContext(AuthContext);
  const { signup, authToken } = context;

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(credentials.email, credentials.name, credentials.password);
    console.log(authToken)
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
}
