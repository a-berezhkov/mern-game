import "./alert.css";

import React from "react";

export function Alert({ title, type = "secondary" }) {
  return (
    <div className="container">
      <div className={`alert alert-${type}`} role="alert">
        {title}
      </div>
    </div>
  );
}
