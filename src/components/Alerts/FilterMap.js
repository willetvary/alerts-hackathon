import React, { useCallback, useEffect, useRef } from "react";

import "./FilterMap.scss";

const FilterMap = () => {
  const parentRef = useRef();
  const svgRef = useRef();
  const blockRef = useRef();


  window._parentRef = parentRef
  window._svgRef = svgRef
  window._blockRef = blockRef

  const scrollAlerts = useCallback(() => {
    const resultContainer = document.getElementsByClassName("alerts-container")[0];
    const y = (blockRef.current.offsetTop - blockRef.current.offsetHeight / 3) / resultContainer.offsetHeight * resultContainer.scrollHeight;
    resultContainer.scrollTo(0, y);

  }, []);

  const clickHandler = useCallback((e) => {
    blockRef.current.style.top = `${e.clientY - parentRef.current.offsetTop - blockRef.current.offsetHeight / 2}px`;
    scrollAlerts();
  }, [scrollAlerts]);

  const wheelScrollHandler = useCallback((e) => {
    let y = parseInt(blockRef.current.style.top) + e.deltaY * .1;
    if (e.deltaY > 0) {
      // scroll down
      y = Math.min(y, parentRef.current.offsetHeight - blockRef.current.offsetHeight);
    } else {
      // scroll up
      y = Math.max(y, 0);
    }
    blockRef.current.style.top = `${y}px`
    scrollAlerts();
  }, [scrollAlerts]);

  return (
    <div ref={parentRef} className="filter-map" onClick={clickHandler} onWheel={wheelScrollHandler}>
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" className="filter-svg" />
      <div ref={blockRef} className="block" />
    </div>
  );
};

export default FilterMap;