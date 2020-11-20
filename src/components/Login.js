import React, { useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      {user ? (
        history.push("/")
      ) : (
        <div>
          <Link to="/">
            <img
              className="login__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/102px-Amazon_logo.svg.png"
              alt=""
            />
          </Link>
          <div className="login__container">
            <h1>Sign in</h1>
            <form>
              <h5>E-mail</h5>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                onClick={login}
                type="submit"
                className="login__signInButton"
              >
                Sign In
              </button>
            </form>
            <p>
              By Signing-in you agree to Amazon's Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and
              Internet-Based Ads Notice.
            </p>
            <button onClick={register} className="login__registerButton">
              Create your Amazon Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
