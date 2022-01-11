import React, { useCallback, useEffect, useRef, useState } from "react";

import "./Input.scss";

export default function Input({ text, setIsInputFocus, addFilter }) {
  const inputRef = useRef();
  const [value, setValue] = useState(text || "");

  const focusHandler = useCallback(() => {
    setIsInputFocus(true);
  }, [setIsInputFocus]);

  const addFilterHandler = useCallback(() => {
    if (value.length > 0) {
      addFilter(value);
      setValue("");
    }
  }, [value, addFilter])

  const blurHandler = useCallback(() => {
    addFilterHandler();
    setIsInputFocus(false);
  }, [setIsInputFocus, addFilterHandler]);

  const changeHandler = useCallback(e => {
    setValue(e.target.value);
  }, [])

  const keyPressHandler = useCallback((e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      addFilterHandler();
    }
  }, [addFilterHandler]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onFocus={focusHandler}
      onBlur={blurHandler}
      onChange={changeHandler}
      onKeyPress={keyPressHandler}
    />
  )
}