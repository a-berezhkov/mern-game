import React from "react";
import { Navigation } from "../../ui/navigation/navigation";
import s from "./main.module.css";

export function Main() {
  return (
    <div className={s.main}>
      <Navigation />
    </div>
  );
}
