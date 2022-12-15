import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/login/LoginStyles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const enabled = username.length > 0 && password.length > 0;

  return (
    <div class="layout">
      <h1 class="login-h1" id="top">
        COOK SYSTEMS
      </h1>
      <h1 class="login-h1" id="subtitle">
        A FINAL APP
      </h1>
      <form class="login-container" id="login-border">
        <img
          id="login-img"
          src="https://i.ibb.co/SsFJbm2/team-logo.png"
          alt="team-logo"
        />
        <input
          class="login-input"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          class="login-input"
          placeholder="Password"
          type="text"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Link to="/select-company">
          <button disabled={!enabled} id="login-button">
            LOG IN
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
