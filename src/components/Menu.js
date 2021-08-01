import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import {  Icon, Link } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon"
import { setNodeIsCollapsed, acknowledgeAlert, enableAlert } from "../actions";

import "./Menu.scss";

function Menu({ id, disabled, isCollapsed, setNodeIsCollapsed, acknowledgeAlert, enableAlert }) {
  return (
    <div className="alert-context-menu">
      <ContextMenuTrigger id={id} holdToDisplay={0}>
        <Link href="#" tabIndex={0}><Icon shape={CdsCoreIcon.ellipsisVerticalIconName} /></Link>
      </ContextMenuTrigger>
      <ContextMenu id={id} className="dropdown-menu">
        <h4 className="dropdown-header">Alert Actions</h4>
        <MenuItem className="dropdown-item" disabled={disabled} onClick={() => acknowledgeAlert(id)}>
          Acknowledge
        </MenuItem>
        <MenuItem className="dropdown-item" disabled={!disabled} onClick={() => enableAlert(id)}>
          Enable
        </MenuItem>
        <div className="dropdown-divider"></div>
        <MenuItem className="dropdown-item" onClick={() => setNodeIsCollapsed(id, !isCollapsed)}>
          {isCollapsed ? "Expand" : "Collapse" }
        </MenuItem>
      </ContextMenu>
    </div>
  );
}

Menu.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  setNodeIsCollapsed: PropTypes.func.isRequired,
  acknowledgeAlert: PropTypes.func.isRequired,
  enableAlert: PropTypes.func.isRequired
};

export default connect(null, { setNodeIsCollapsed, acknowledgeAlert, enableAlert })(Menu);