import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3>this is home</h3>
      <h5>user: {user.displayName}</h5>
    </div>
  );
};

export default Home;
