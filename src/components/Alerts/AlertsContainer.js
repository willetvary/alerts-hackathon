import React, { useCallback } from "react";
import TopLevelAlerts from "./TopLevelAlerts";
import FilterMap from "./FilterMap";
import { syncScroll } from "../utils";

import "./AlertsContainer.scss";

const AlertsContainer = () => {

  const scrollHandler = useCallback(() => {
    syncScroll();
  }, []);

  return (
    <div className="alerts-container" onScroll={scrollHandler}>
      <TopLevelAlerts />
      <FilterMap />
    </div>
  );
};

export default AlertsContainer;