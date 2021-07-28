import React, { useCallback } from "react";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { Icon, Link } from "@tmc/clr-react";
import { acknowledgeAlert, enableAlert } from "../services";

import "./Menu.scss";

export default function Menu({ alert, updateAlerts }) {

  const toggleIsExpanded = useCallback(() => {
    alert.isExpanded = !alert.isExpanded;
    updateAlerts();
  }, [alert, updateAlerts]);

  const acknowledClickHandler = useCallback(() => {
    acknowledgeAlert(alert.id);
  }, [alert]);

  const enableClickHandler = useCallback(() => {
    enableAlert(alert.id);
  }, [alert]);

  return (
    <div className="alert-context-menu">
      <ContextMenuTrigger id={alert.nodeId} holdToDisplay={0}>
        <Link href="#" tabIndex={0}><Icon shape="ellipsis-vertical" /></Link>
      </ContextMenuTrigger>
      <ContextMenu id={alert.nodeId} className="dropdown-menu">
        <MenuItem className="dropdown-item" onClick={acknowledClickHandler}>
          Acknowledge
        </MenuItem>
        <MenuItem className="dropdown-item" onClick={enableClickHandler}>
          Enable
        </MenuItem>
        <div className="dropdown-divider"></div>
        <MenuItem className="dropdown-item" onClick={toggleIsExpanded}>
          {alert.isExpanded ? "Collapse" : "Expand"}
        </MenuItem>
      </ContextMenu>
    </div>
  );
}