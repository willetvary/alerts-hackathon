import React from "react";
import PropTypes from "prop-types";

import "./AlertDetails.scss";

export default function AlertDetails({ alerts, filterText }) {

  const highlightName = (name) => {
    const result = {
      found: false,
      parts: []
    };

    if (!filterText) {
      result.parts.push(<span key={result.parts.length}>{name}</span>);
    } else {
      const length = filterText.length;
      const exp = new RegExp(filterText, "i");
      while (name !== "") {
        const index = name.match(exp)?.index;
        if (index === undefined) {
          result.parts.push(<span key={result.parts.length}>{name}</span>);
          name = "";
        } else {
          result.parts.push(<span key={result.parts.length}>{name.substr(0, index)}</span>);
          result.parts.push(<span key={result.parts.length} className="highlight">{name.substr(index, length)}</span>);
          name = name.substr(index + length);
          result.found = true;
        }
      }
    }
    return result;
  };

  const rows = [];
  let index = 1;
  alerts.forEach(name => {
    const result = highlightName(name);

    if (!filterText || result.found) {
      rows.push(
        <div key={index} className="alert-row">
          <div>{index}.</div>
          <div>{result.parts}</div>
        </div>
      );
      index++;
    }
  });

  let header;
  if (filterText) {
    header = `${rows.length} of ${alerts.length} alert${alerts.length > 1 ? "s" : ""} matching "${filterText}".`;
  } else {
    header = `${alerts.length} Alert${alerts.length === 1 ? "" : "s"}`;
  }

  return (
    <div className="alerts-section">
      <div className="section-header">{header}</div>
      <div className="alert-names">{rows}</div>
    </div>
  );
}

AlertDetails.propTypes = {
  alerts: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired
};
