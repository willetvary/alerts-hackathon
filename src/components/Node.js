import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { DOWN, Icon, Link, RIGHT } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon";
import Menu from "./Menu";
import DisabledBadge from "./DisabledBadge";
import FiringBadge from "./FiringBadge";
import TopicImage from "./TopicImage";
import AlertDetails from "./AlertDetails";
import AlertChildren from "./AlertChildren";

const SHOW_ALERTS_ABOVE_LEVEL = 2;
const SHOW_TOPIC_LINK_BELOW_LEVEL = 3;
export default function Node({ alert, level, filterText, updateAlerts, refreshAlerts }) {

  const clickHandler = useCallback((e) => {
    e.preventDefault();
    alert.isExpanded = !alert.isExpanded;
    updateAlerts();
  }, [alert, updateAlerts]);

  const direction = alert.isExpanded ? DOWN : RIGHT;

  return (
    <div className="node">
      <div className="title">
        <div className="menu">
          <Menu alert={alert} updateAlerts={updateAlerts} refreshAlerts={refreshAlerts} />
        </div>
        <Link type="button" action="flat" href="#" className="id" onClick={clickHandler}>
          <Icon shape={CdsCoreIcon.angleIconName} direction={direction} />
          {alert.id}
        </Link>
        {alert.disabled ? <DisabledBadge /> : null}
        {alert.numOfFiringAlerts > 0 && <FiringBadge numOfFiringAlerts={alert.numOfFiringAlerts} />}
        {level < SHOW_TOPIC_LINK_BELOW_LEVEL && <TopicImage id={alert.id} />}
      </div>
      {alert.isExpanded ? (
        <div className="content">
          {level > SHOW_ALERTS_ABOVE_LEVEL && <AlertDetails alerts={alert.alerts} filterText={filterText} />}
          <AlertChildren
            level={level + 1}
            children={alert.children}
            filterText={filterText}
            updateAlerts={updateAlerts}
            refreshAlerts={refreshAlerts}
          />
        </div>
      ) : null}
    </div>
  );
}

Node.propTypes = {
  alert: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  filterText: PropTypes.string.isRequired,
  updateAlerts: PropTypes.func.isRequired,
  refreshAlerts: PropTypes.func.isRequired
};