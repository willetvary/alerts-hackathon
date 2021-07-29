import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { DOWN, Icon, Link, RIGHT } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon";
import Menu from "./Menu";
import TopicImage from "./TopicImage";
import AlertDetails from "./AlertDetails";
import AlertChildren from "./AlertChildren";

export default function Node({ alert, filterText, updateAlerts, refreshAlerts }) {

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
        <TopicImage id={alert.id} />
      </div>
      {alert.isExpanded ? (
        <div className="content">
          <AlertDetails alerts={alert.alerts} filterText={filterText} />
          <AlertChildren children={alert.children} updateAlerts={updateAlerts} refreshAlerts={refreshAlerts} />
        </div>
      ) : null}
    </div>
  );
}

Node.propTypes = {
  alert: PropTypes.object.isRequired,
  filterText: PropTypes.string,
  updateAlerts: PropTypes.func.isRequired,
  refreshAlerts: PropTypes.func.isRequired
};