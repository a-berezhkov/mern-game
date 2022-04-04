import React from "react";
import Draggable from "react-draggable";
import { monster } from "../../data";
import s from "./monster.module.css";

export const Monster = () => {
  const nodeRef = React.useRef(null);
  return (
    <div className="container">
      <h2 className={s.title}>Make a Monster</h2>

      <div className={s.monster}>
        <div className={s.frame}></div>
        <div className={s.parts}>
          {monster.map((elem) =>
            Object.values(elem).map((item) =>
              item.map((el) => (
                <Draggable
                  axis="both"
                  key={el.id}
                  nodeRef={nodeRef}
                  onStart={(e) => e.preventDefault()}
                  onStop={(e) => console.log(e.pageX, e.pageY)}
                >
                  <div id={el.id} className={s.monster__body} ref={nodeRef}>
                    <img src={el.url} alt="" />
                  </div>
                </Draggable>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
};
