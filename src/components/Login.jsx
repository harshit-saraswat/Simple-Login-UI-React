import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isUserRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <Button text={props.isUserRegistered ? "Login" : "Register"} />
    </form>
  );
}

export default Login;
