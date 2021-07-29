import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Node from "./Node";

import "./TopLevelAlerts.scss";

export default function TopLevelAlerts({ topLevelAlerts, filterText, refreshAlerts }) {
  const [alerts, setAlerts] = useState(topLevelAlerts);
  const updateAlerts = useCallback(() => {
    setAlerts({...alerts});
  }, [alerts]);

  return (
    <div className="top-level-alerts">
      {topLevelAlerts.map(alert => (
        <Node
          key={alert.id} alert={alert}
          filterText={filterText}
          updateAlerts={updateAlerts}
          refreshAlerts={refreshAlerts}
        />
      ))}
    </div>
  );
}

TopLevelAlerts.propTypes = {
  topLevelAlerts: PropTypes.array.isRequired,
  filterText: PropTypes.string,
  refreshAlerts: PropTypes.func.isRequired
}
