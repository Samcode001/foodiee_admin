import React, { useState } from "react";
import "../components/styles/LoginForm.css"; // Import your CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import shopState from "../recoil/atoms/shop";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setShop = useSetRecoilState(shopState);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here, such as making an API call to authenticate the user
    const { data } = await axios.post("http://localhost:5000/shop/login", {
      email: email,
      password: password,
    });
    console.log("Email:", email, "Password:", password);
    // Reset the form after submission
    setEmail("");
    setPassword("");
    // localStorage.setItem("restrauntName", data.user.name);
    // localStorage.setItem("username", data.user.email);

    setShop({
      restrauntName: data.user.name,
      username: data.user.email,
    });

    navigate(`/orders?restrauntName=${data.user.name}&username=${data.user.email}`);
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
