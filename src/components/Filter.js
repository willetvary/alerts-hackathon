import React from "react";
import PropTypes from "prop-types";
import { ControlContainer, CoreControlAction, FormControl,  Icon, Input, InputWrapper } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon";

import "./Filter.scss";

export default function Filter({ value, setValue }) {
  return (
    <FormControl className="filter">
      <ControlContainer>
        <InputWrapper>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <CoreControlAction>
            <Icon shape={CdsCoreIcon.searchIconName} size={18} />
          </CoreControlAction>
        </InputWrapper>
      </ControlContainer>
    </FormControl>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};