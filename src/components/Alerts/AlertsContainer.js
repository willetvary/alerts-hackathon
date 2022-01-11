import React from "react";
import TopLevelAlerts from "./TopLevelAlerts";
import FilterMap from "./FilterMap";

import "./AlertsContainer.scss";

const AlertsContainer = () => {
  return (
    <>
      <div className="alerts-container">
        <TopLevelAlerts />
        {/* <FilterMap /> */}
      </div>
    </>
  );
};

export default AlertsContainer;