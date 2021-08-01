import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ControlContainer, CoreControlAction, FormControl,  Icon, Input, InputWrapper } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon";
import { setFilterText } from "../actions";
import { getFilterText } from "../selectors";

import "./Filter.scss";

function Filter({ filterText, setFilterText }) {
  return (
    <FormControl className="filter">
      <ControlContainer>
        <InputWrapper>
          <Input value={filterText} onChange={(e) => setFilterText(e.target.value)} />
          <CoreControlAction>
            <Icon shape={CdsCoreIcon.searchIconName} size={18} />
          </CoreControlAction>
        </InputWrapper>
      </ControlContainer>
    </FormControl>
  );
}

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filterText: getFilterText(state)
});

export default connect(mapStateToProps, { setFilterText })(Filter);