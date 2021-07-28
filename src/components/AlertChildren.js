import React from "react";
import Node from "./Node";

import "./AlertChildren.scss";

export default function AlertChildren({ children, updateAlerts }) {
  if (!children) return null;

  const ary = children.map((row, index) => {
    return (
      <Node key={index} alert={row} updateAlerts={updateAlerts} />
    );
  });
  return (
    <div className="children-section">
      <div className="section-header">Children</div>
      {ary}
    </div>
  );
}