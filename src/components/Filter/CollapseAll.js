import React, { useCallback } from "react";
import { connect } from "react-redux";
import { setCollapseAll } from "../../actions";

import "./CollapseAll.scss";

const CollapseAll = ({ setCollapseAll }) => {

  const clickHandler = useCallback((e) => {
    e.preventDefault();
    setCollapseAll();
  }, [setCollapseAll]);

  return (
    <div className="clr-form-control collapse-all">
      <a type="button" href="#" onClick={clickHandler} >Collapse All</a>
    </div>
  );
};

export default connect(null, { setCollapseAll })(CollapseAll);