import React, { useCallback, useState } from "react";
import cx from "classnames";
import { Icon } from "@tmc/clr-react";

import "./Pill.scss";

const Pill = ({ filter, removeFilter }) => {
  const [isFocus, setIsFocus] = useState(false);
  const { text, color, background } = filter;

  const focusHandler = useCallback(() => {
    setIsFocus(true);
  }, []);

  const blurHandler = useCallback(() => {
    setIsFocus(false);
  }, []);

  const clickHandler = useCallback(() => {
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
      {text}
      <button
        className={cx({"focus": isFocus})}
        style={buttonStyle}
        onClick={clickHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      >
        <Icon family="link" shape="close" style={{color}} />
      </button>
    </span>
  );
};

export default Pill;