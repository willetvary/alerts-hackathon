import React from "react";
import PropTypes from "prop-types";
import Node from "./Node";

import "./AlertChildren.scss";

export default function AlertChildren({ children, filterText, updateAlerts, refreshAlerts }) {
  if (!children) return null;

  const ary = children.map((row, index) => {
    return (
      <Node key={index} alert={row} filterText={filterText} updateAlerts={updateAlerts} refreshAlerts={refreshAlerts} />
    );
  });
  return (
    <div className="children-section">
      <div className="section-header">Children</div>
      {ary}
    </div>
  );
}

AlertChildren.propTypes = {
  children: PropTypes.array,
  filterText: PropTypes.string.isRequired,
  updateAlerts: PropTypes.func.isRequired,
  refreshAlerts: PropTypes.func.isRequired
};