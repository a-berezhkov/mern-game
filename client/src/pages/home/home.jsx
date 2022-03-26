import React from "react";
import s from "./home.module.css";
import Navigation from "../../ui/navigation/navigation";

const Home = () => {
  return (
    <div className={s.header}>
      <Navigation />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
