import React, { useEffect } from "react";
import { connect } from "react-redux";
import ImmutableProptypes from "react-immutable-proptypes";
import { getHierarchy, getFilters, getActiveAlertsOnly } from "../../selectors";
import Node from "./Node";
import { drawFilterHighlights } from "../utils";

import "./TopLevelAlerts.scss";



function TopLevelAlerts({ hierarchy, filters, activeAlertsOnly }) {
  const level = 1;

  const nodes = hierarchy.map(({ id, children }) => (
    <Node key={id} id={id} children={children} level={level} filters={filters} />
  ));

  useEffect(() => {
    setTimeout(() => {
      drawFilterHighlights();
    });
  }, [filters, activeAlertsOnly])

  return (
    <div className="top-level-alerts">
      {nodes}
    </div>
  );
}

TopLevelAlerts.propTypes = {
  hierarchy: ImmutableProptypes.list.isRequired
}

const mapStateToProps = (state) => {
  return {
    hierarchy: getHierarchy(state),
    filters: getFilters(state),
    activeAlertsOnly: getActiveAlertsOnly(state)
  }
};

export default connect(mapStateToProps)(TopLevelAlerts);