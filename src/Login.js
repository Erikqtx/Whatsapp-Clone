import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { AlternateEmail } from "@material-ui/icons";
function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Anmelden zu Erik-WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Mit Google anmelden</Button>
      </div>
    </div>
  );
}

export default Login;
