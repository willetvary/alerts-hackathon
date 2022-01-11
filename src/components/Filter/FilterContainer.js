import React from "react";
import QueryBar from "./QueryBar";
import ActiveAlertCheckbox from "./ActiveAlertCheckbox";

export default function FilterContainer() {
  return (
    <div className="filter-container">
      <QueryBar />
      <ActiveAlertCheckbox />
    </div>
  );
};