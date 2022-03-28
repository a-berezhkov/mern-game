import React from "react";
import { Navigation } from "../../ui/navigation/navigation";
import s from "./board.module.css";

export const Board = () => {
  return (
    <div className={s.board}>
      <Navigation />
    </div>
  );
};
