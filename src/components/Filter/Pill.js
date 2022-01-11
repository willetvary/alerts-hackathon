import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { Icon } from "@tmc/clr-react";
import { updateFilter } from "../../actions";
import Input from "./Input";

import "./Pill.scss";

const Pill = ({ filter, removeFilter, setIsInputFocus, updateFilter }) => {
  const [isIconFocus, setIsIconFocus] = useState(false);
  const [isTextFocus, setIsTextFocus] = useState(false);
  const [isTextActive, setIsTextActive] = useState(false);
  const { text, color, background } = filter;

  const textClickHandler = useCallback(() => {
    setIsTextActive(true);
  }, []);

  const textFocusHandler = useCallback(() => {
    setIsTextFocus(true);
  }, []);

  const textBlurHandler = useCallback(() => {
    setIsTextFocus(false);
  }, []);

  const updateFilterHandler = useCallback(newText => {
    if (!newText.trim()) {
      removeFilter(filter);
    } else {
      setIsTextActive(false);
      setIsTextFocus(false);
      if (newText.trim() !== text) {
        updateFilter(text, newText);
      }
    }
  }, [text, filter, updateFilter, removeFilter]);

  const iconFocusHandler = useCallback(() => {
    setIsIconFocus(true);
  }, []);

  const iconBlurHandler = useCallback(() => {
    setIsIconFocus(false);
  }, []);

  const iconClickHandler = useCallback(() => {
    removeFilter(filter);
  }, [filter, removeFilter]);

  const spanStyle = {
    color,
    background,
    borderColor: background
  };

  const buttonStyle = {
    outlineColor: color
  };

  return (
    <span className="label pill" style={spanStyle}>
      {!isTextActive && (
        <button
          className={cx({"focus": isTextFocus})}
          onClick={textClickHandler}
          onFocus={textFocusHandler}
          onBlur={textBlurHandler}
        >{text}</button>
      )}
      {isTextActive && <Input text={text} setIsInputFocus={setIsInputFocus} addFilter={updateFilterHandler} />}
      <button
        className={cx({"focus": isIconFocus})}
        style={buttonStyle}
        onClick={iconClickHandler}
        onFocus={iconFocusHandler}
        onBlur={iconBlurHandler}
      >
        <Icon family="link" shape="close" style={{color}} />
      </button>
    </span>
  );
};

export default connect(null, { updateFilter })(Pill);