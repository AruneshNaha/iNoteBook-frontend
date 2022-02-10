import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const host = "http://localhost:5000";
  const [authToken, setAuthToken] = useState("");

  const authenticate = async (email, password) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const auth = await response.json();
    await setAuthToken(auth.authtoken);
  };

  const signup = async (email, name, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email,name: name, password: password }),
    });

    const auth = await response.json();
    await setAuthToken(auth.authtoken);
  };

  return (
    <AuthContext.Provider value={{ authToken, authenticate, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState