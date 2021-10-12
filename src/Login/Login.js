import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
  const { singnInUsingGoogle, singinUsingGithub } = useAuth();
  return (
    <div>
      <h2>Please login</h2>
      <button onClick={singnInUsingGoogle}>Google signin</button>
      <br />
      <button onClick={singinUsingGithub}>Github signin</button>
      <br />
      <Link to="/register">New user</Link>
    </div>
  );
};

export default Login;
