import React, { useCallback, useState } from "react";

export default function Input({ setIsFocus, addFilter }) {

  const [value, setValue] = useState("");

  const focusHandler = useCallback(() => {
    setIsFocus(true);
  }, [setIsFocus]);

  const addFilterHandler = useCallback(() => {
    if (value.length > 0) {
      addFilter(value);
      setValue("");
    }
  }, [value, addFilter])

  const blurHandler = useCallback(() => {
    addFilterHandler();
    setIsFocus(false);
  }, [setIsFocus, addFilterHandler]);

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

  console.log(">>> Input return")
  return (
    <input
      type="text"
      value={value}
      onFocus={focusHandler}
      onBlur={blurHandler}
      onChange={changeHandler}
      onKeyPress={keyPressHandler}
    />
  )
}