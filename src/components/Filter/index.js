import React, { useCallback, useRef, useState } from "react";
import cx from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
// import { List } from "immutable";
import { Icon } from "@tmc/clr-react";
import * as CdsCoreIcon from "@cds/core/icon";
import { setFilters } from "../../actions";
import { getFilters } from "../../selectors";
import { COLORS, COMMON_COLOR } from "../constants";
import Pill from "./Pill";
import Input from "./Input";

import "./index.scss";

function Filter({ filters, setFilters }) {
  const colors = useRef([...COLORS]);
  const [isFocus, setIsFocus] = useState(false);

  const addFilter = useCallback(text => {
    const newFilter = colors.current.shift() ?? {...COMMON_COLOR};
    newFilter.text = text;
    setFilters([
      ...filters,
      newFilter
    ]);
  }, [filters, setFilters]);

  const removeFilter = useCallback((filterToRemove) => {
    console.log(">>> filters", filters, filterToRemove)
    colors.current.push({...filterToRemove, text: null });
    setFilters(filters.filter(i => i !== filterToRemove));
  }, [filters]);

  const elems = filters.map((item, index) => {
    return <Pill key={`${index}_${item.text}`} filter={item} removeFilter={removeFilter} />
  });

  console.log(">>> colors", colors.current)

  return (
    <div className={cx("filter-bar clr-input", { "focus": isFocus })}>
      <Icon shape={CdsCoreIcon.searchIconName} size={18} />
      {elems}
      <Input setIsFocus={setIsFocus} addFilter={addFilter} />
    </div>
  );
}

Filter.propTypes = {
  filters: ImmutablePropTypes.list.isRequired,
  setFilters: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filters: getFilters(state)
});

export default connect(mapStateToProps, { setFilters })(Filter);