import React from "react";
import HomePage from "./HomePage/HomePage";
import Login from "./Auth/Login";

const App = () => {
  const isLogin = true;
  return <div>{isLogin ? <HomePage /> : <Login />}</div>;
};

export default App;
