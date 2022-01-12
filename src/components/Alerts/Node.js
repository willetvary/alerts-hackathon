import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import ImmutableProptypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import { DOWN, Icon, Link, RIGHT } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon";
import { setNodeIsCollapsed } from "../../actions";
import { getNode, getActiveAlertsOnly } from "../../selectors";
import Menu from "../Menu";
import DisabledBadge from "../DisabledBadge";
import FiringBadge from "../FiringBadge";
import TopicImage from "./TopicImage";
import AlertDetails from "./AlertDetails";
import AlertChildren from "./AlertChildren";

const SHOW_ALERTS_ABOVE_LEVEL = 2;
const SHOW_TOPIC_LINK_BELOW_LEVEL = 3;
function Node({
  id, children, level, node, setNodeIsCollapsed, activeAlertsOnly, filters
}) {
  const numOfFiringAlerts = node.get("numOfFiringAlerts");
  const disabled = node.get("disabled");
  const isCollapsed = node.get("isCollapsed", false);
  const direction = isCollapsed ? RIGHT : DOWN;

  if (activeAlertsOnly && numOfFiringAlerts === 0) return null;

  return (
    <div className="node">
      <div className="title">
        <div className="menu">
          <Menu id={id} disabled={disabled} isCollapsed={isCollapsed} />
        </div>
        <Link
          type="button"
          action="flat"
          href="#"
          className="id"
          onClick={() => setNodeIsCollapsed(id, !isCollapsed)}
        >
          <Icon shape={CdsCoreIcon.angleIconName} direction={direction} />
          {id}
        </Link>
        {disabled ? <DisabledBadge /> : null}
        {numOfFiringAlerts > 0 && <FiringBadge numOfFiringAlerts={numOfFiringAlerts} />}
        {level < SHOW_TOPIC_LINK_BELOW_LEVEL && <TopicImage id={id} />}
      </div>
      {isCollapsed ? null : (
        <div className="content">
          {level > SHOW_ALERTS_ABOVE_LEVEL && <AlertDetails node={node} filters={filters} />}
          {children && <AlertChildren children={children} level={level + 1} filters={filters} />}
        </div>
      )}
    </div>
  );
}

Node.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.array,
  level: PropTypes.number.isRequired,
  node: ImmutableProptypes.map.isRequired,
  setNodeIsCollapsed: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  node: getNode(state, ownProps.id),
  activeAlertsOnly: getActiveAlertsOnly(state)
});

export default connect(mapStateToProps, { setNodeIsCollapsed })(Node);