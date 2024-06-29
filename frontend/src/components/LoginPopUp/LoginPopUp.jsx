import React, { useContext, useState } from "react";
import "./LoginPopUp.css";
// import '../../index.css'
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { setToken, url, setCartItems } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    let new_url = url;
    if (currState === "Login") {
      new_url += "/api/user/login";
    } else {
      new_url += "/api/user/register";
    }
    const response = await axios.post(new_url, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setCartItems({ token: response.data.token });
      setShowLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login-popup">
    <form onSubmit={onLogin} className="login-popup-box">
      <div className="login-popup-title">
        <h2>{currState}</h2>
        <img
          src={assets.cross_icon}
          onClick={() => setShowLogin(false)}
          alt="Close"
        />
      </div>
      <div className="login-popup-input">
        {currState === "Sign Up" && (
          <input
            onChange={onChangeHandler}
            name="name"
            value={data.name}
            type="text"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={data.email}
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={data.password}
          placeholder="Password"
          required
        />
      </div>
      <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" id="terms" required />
        <p>By continuing, I agree to the terms and conditions</p>
      </div>
      {currState === "Login" ? (
        <p>
          Create a new account{" "}
          <span onClick={() => setCurrState("Sign Up")}>click here</span>
        </p>
      ) : (
        <p>
          Already have an account?
          <span onClick={() => setCurrState("Login")}> click here</span>
        </p>
      )}
    </form>
  </div>
  );
};

export default LoginPopup;
