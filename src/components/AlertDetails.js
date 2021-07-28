import React from "react";
import { Label, DANGER, WARNING } from "@tmc/clr-react";

import "./AlertDetails.scss";

const SEVERITY_MAP = {
  SEVERE: DANGER,
  WARN: WARNING
}

export default function AlertDetails({ alerts }) {
  const ary = alerts.map((row, index) => {
    return (
      <div key={index} className="alert-row">
        <div>{row.name}</div>
        <Label status={SEVERITY_MAP[row.severity]}>{row.severity}</Label>
      </div>
    );
  });
  return (
    <div className="alerts-section">
      <div className="section-header">Alerts</div>
      {ary}
    </div>
  );
}