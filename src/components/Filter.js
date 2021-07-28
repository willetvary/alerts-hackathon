import React from "react";
import { ControlContainer, CoreControlAction, FormControl,  Icon, Input, InputWrapper } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon";

import "./Filter.scss";

export default function Filter() {
  return (
    <FormControl className="filter">
      <ControlContainer>
        <InputWrapper>
          <Input />
          <CoreControlAction>
            <Icon shape={CdsCoreIcon.searchIconName} size={18} />
          </CoreControlAction>
        </InputWrapper>
      </ControlContainer>
    </FormControl>
  );
}