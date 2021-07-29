import React from "react";
import PropTypes from "prop-types";
import { Badge, DANGER, Tooltip } from "@tmc/clr-react";

export default function FiringBadge({ numOfFiringAlerts }) {
  return (
    <Tooltip value={`${numOfFiringAlerts} firing alert${numOfFiringAlerts > 1 ? "s" : ""}`}>
      <Badge status={DANGER}>{numOfFiringAlerts}</Badge>
    </Tooltip>
  );
}

FiringBadge.propTypes = {
  numOfFiringAlerts: PropTypes.number.isRequired
};