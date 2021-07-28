import React from "react";
import { Button, ButtonGroup, FormControl } from "@tmc/clr-react";

import "./Buttons.scss";

export default function Buttons({ topLevelAlerts }) {

  return (
    <FormControl className="buttons">
      <ButtonGroup>
        <Button type="button">Expand</Button>
        <Button type="button">Collapse</Button>
      </ButtonGroup>
    </FormControl>
  );
}