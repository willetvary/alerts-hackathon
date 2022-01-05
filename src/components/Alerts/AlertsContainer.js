import React from "react";
import AlertsStats from "./AlertsStats";
import TopLevelAlerts from "./TopLevelAlerts";
import FilterMap from "./FilterMap";

import "./AlertsContainer.scss";

const AlertsContainer = () => {
  return (
    <>
    <AlertsStats />
    <div className="alerts-container">
      <TopLevelAlerts />
      <FilterMap />
    </div>
  </>
  );
};

export default AlertsContainer;