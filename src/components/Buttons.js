import React from "react";
import { Button, ButtonGroup, Checkbox, ControlContainer, FormControl, Icon } from "@tmc/clr-react";

import "./Buttons.scss";

export default function Buttons({ topLevelAlerts }) {

  const selected = 0;

  return (
    <FormControl className="buttons">
      <ButtonGroup>
        <div className="check-box">
          <Checkbox />
        </div>
        <Button type="button">Expand</Button>
        <Button type="button">Collapse</Button>
        <Button type="button">Acknowledge</Button>
      </ButtonGroup>
      <div className="selected-text">{selected} selected</div>
    </FormControl>
  );
}