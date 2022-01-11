import React from "react";
import { connect } from "react-redux"
import {
  Checkbox,
  CheckboxWrapper,
  ControlContainer,
  ControlLabel,
  FormControl
} from "@tmc/clr-react";
import { setActiveAlertsOnly } from "../../actions";
import { getActiveAlertsOnly } from "../../selectors";

import "./ActiveAlertCheckbox.scss";

const ActiveAlertCheckbox = ({ activeAlertsOnly, setActiveAlertsOnly }) => {
  return (
    <FormControl className="active-alerts-only">
      <ControlLabel>Show active alerts only</ControlLabel>
      <ControlContainer>
        <CheckboxWrapper>
          <Checkbox checked={activeAlertsOnly} onChange={() => setActiveAlertsOnly(!activeAlertsOnly)} />
        </CheckboxWrapper>
      </ControlContainer>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  activeAlertsOnly: getActiveAlertsOnly(state)
});

export default connect(mapStateToProps, { setActiveAlertsOnly })(ActiveAlertCheckbox);