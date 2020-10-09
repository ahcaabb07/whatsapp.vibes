import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../sidebar/firebase";
import "./login.css";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <div className="login_container">
        <Button onClick={signin}>
          <img className="image" src="/google.png" />
        </Button>
        <div className="login_text">Sign in with Google</div>
      </div>
    </div>
  );
}

export default Login;
