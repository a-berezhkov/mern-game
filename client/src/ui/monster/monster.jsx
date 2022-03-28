import React from "react";
import { monster } from "../../data";
import s from "./monster.module.css";

export const Monster = (e) => {
  const [coords, setCoords] = React.useState({ x: e.pageX, y: e.pageY });

  return (
    <div className="container">
      <h2 className={s.title}>Make a Monster</h2>
      <div className={s.monster}>
        <div className={s.frame}></div>
        <div className={s.parts}>
          {monster.map((body) => (
            <div id={body.id} className={s.monster__body} key={body.id}>
              <img
                src={body.body}
                alt=""
                onMouseDown={(e) => {
                  setCoords(() => ({
                    x: e.pageX - e.target.offsetWidth / 2,
                    y: e.pageY - e.target.offsetHeight / 2,
                  }));
                  console.log(coords);
                }}
                onMouseUp={(e) => {
                  setCoords(() => ({
                    x: e.pageX - e.target.offsetWidth / 2,
                    y: e.pageY - e.target.offsetHeight / 2,
                  }));
                  console.log(coords);
                }}
                // onDragStart={(e) => e.preventDefault()}
                draggable
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
