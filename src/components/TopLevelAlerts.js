import React from "react";
import Node from "./Node";

import "./TopLevelAlerts.scss";

export default function TopLevelAlerts({ topLevelAlerts }) {

  console.log(">>> topLevelAlerts", topLevelAlerts)
  return (
    <div className="top-level-alerts">
      {topLevelAlerts.map(alert => <Node key={alert.id} alert={alert} />)}
    </div>
  );
}