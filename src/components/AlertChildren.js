import React from "react";
import PropTypes from "prop-types";
import Node from "./Node";

export default function AlertChildren({ children, level, filterText, updateAlerts, refreshAlerts }) {
  if (!children) return null;

  const ary = children.map((row, index) => {
    return (
      <Node
        key={index}
        alert={row}
        level={level}
        filterText={filterText}
        updateAlerts={updateAlerts}
        refreshAlerts={refreshAlerts}
      />
    );
  });
  return (
    <div className="children-section">
      {ary}
    </div>
  );
}

AlertChildren.propTypes = {
  children: PropTypes.array,
  level: PropTypes.number.isRequired,
  filterText: PropTypes.string.isRequired,
  updateAlerts: PropTypes.func.isRequired,
  refreshAlerts: PropTypes.func.isRequired
};