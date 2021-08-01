import React from "react";
import { connect } from "react-redux";
import ImmutableProptypes from "react-immutable-proptypes";
import { getHierarchy } from "../selectors";
import Node from "./Node";

import "./TopLevelAlerts.scss";

function TopLevelAlerts({ hierarchy, alertLevels }) {
  const level = 1;
  return (
    <div className="top-level-alerts">
      {hierarchy.map(({ id, children }) => (
        <Node key={id} id={id} children={children} level={level} />
      ))}
    </div>
  );
}

TopLevelAlerts.propTypes = {
  hierarchy: ImmutableProptypes.list.isRequired
}

const mapStateToProps = (state) => {
  return {
    hierarchy: getHierarchy(state)
  }
};

export default connect(mapStateToProps)(TopLevelAlerts);