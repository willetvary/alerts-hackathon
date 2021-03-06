import React from "react";
import { connect } from "react-redux";
import ImmutableProptypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import { getFilterText } from "../selectors";

import "./AlertDetails.scss";

function AlertDetails({ node, filterText }) {

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
  const alerts = node.get("alerts");
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
    header = `${rows.length} of ${alerts.size} alert${alerts.size > 1 ? "s" : ""} matching "${filterText}".`;
  } else {
    header = `${alerts.size} Alert${alerts.size === 1 ? "" : "s"}`;
  }

  return (
    <div className="alerts-section">
      <div className="section-header">{header}</div>
      <div className="alert-names">{rows}</div>
    </div>
  );
}

AlertDetails.propTypes = {
  node: ImmutableProptypes.map.isRequired,
  filterText: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  filterText: getFilterText(state)
});

export default connect(mapStateToProps)(AlertDetails);