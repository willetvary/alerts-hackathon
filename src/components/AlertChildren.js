import React from "react";
import PropTypes from "prop-types";
import Node from "./Node";

export default function AlertChildren({ children, level }) {
  return (
    <div className="children-section">
      {children.map(({ id, children }) => <Node key={id} id={id} children={children} level={level} />)}
    </div>
  );
}

AlertChildren.propTypes = {
  children: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired
};