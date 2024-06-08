import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-box">
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
            <input type="text" placeholder="Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" id="terms" required />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
        {currState === "login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setCurrState("Sign Up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState("login")}> click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
