import React from "react";
import { Badge, Tooltip } from "@tmc/clr-react";

export default function DisabledBadge() {
  return (
    <Tooltip value="This level is disabled.">
      <Badge className="disabled-badge">Disabled</Badge>
    </Tooltip>
  );
}