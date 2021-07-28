import React, { useCallback, useState } from "react";
import Node from "./Node";

import "./TopLevelAlerts.scss";

export default function TopLevelAlerts({ topLevelAlerts }) {
  const [alerts, setAlerts] = useState(topLevelAlerts);
  const updateAlerts = useCallback(() => {
    setAlerts({...alerts});
  }, [alerts]);

  return (
    <div className="top-level-alerts">
      {topLevelAlerts.map(alert => <Node key={alert.id} alert={alert} updateAlerts={updateAlerts} />)}
    </div>
  );
}