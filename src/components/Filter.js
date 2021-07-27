import React from "react";
import { ControlContainer, CoreControlAction, FormControl,  Icon, Input, InputWrapper } from "@tmc/clr-react";

import "./Filter.scss";

export default function Filter() {
  return (
    <FormControl className="filter">
      <ControlContainer>
        <InputWrapper>
          <Input />
          <CoreControlAction>
            <Icon shape="search" size={18} />
          </CoreControlAction>
        </InputWrapper>
      </ControlContainer>
    </FormControl>
  );
}