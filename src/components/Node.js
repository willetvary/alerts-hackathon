import React from "react";
import { Badge, Checkbox, Icon } from "@tmc/clr-react";

export default function Node({ alert }) {
  console.log(">>> alert", alert)
  return (
    <div className="node">
    <div className="title">
      <Checkbox />
      <div tabIndex={0}>
        <Icon shape="angle" direction="right" />
        <span>{alert.id}</span>
        <Badge status="danger">1</Badge>
        <Badge status="warn">2</Badge>
      </div>
    </div>
    <div className="content">
      <div className="node">
        <div className="title">
          <Checkbox />
          <div>
            <Icon shape="angle" direction="right" />
            <span>inner alert</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}