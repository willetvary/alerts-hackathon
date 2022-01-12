import React from "react";
import QueryBar from "./QueryBar";
import ActiveAlertCheckbox from "./ActiveAlertCheckbox";
import CollapseAll from "./CollapseAll";

import "./FilterContainer.scss";

export default function FilterContainer() {
  return (
    <div className="filter-container">
      <QueryBar />
      <div className="checkbox-and-links">
        <ActiveAlertCheckbox />
        <CollapseAll />
      </div>
    </div>
  );
};