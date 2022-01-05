import React from "react";
import { connect } from "react-redux";
import ImmutableProptypes from "react-immutable-proptypes";
// import PropTypes from "prop-types";
import { getFilters } from "../selectors";

import "./AlertDetails.scss";

function AlertDetails({ node, filters }) {
  console.log(">>> go here")

  const highlightName = (name) => {
    const result = {
      found: false,
      parts: []
    };

    if (!filters.length) {
      result.parts.push(<span key={result.parts.length}>{name}</span>);
    } else {
      const filterExpressions = filters.map(({ text, color, background }) => {
        return {
          exp: new RegExp(text, "i"),
          length: text.length,
          color,
          background
        };
      });
      while (name !== "") {
        let index;
        for(let i = 0; i < filterExpressions.length; i++) {
          const { exp, length, color, background } = filterExpressions[i];
          index = name.match(exp)?.index;
          if (index !== undefined) {
            result.parts.push(<span key={result.parts.length}>{name.substr(0, index)}</span>);
            result.parts.push(<span key={result.parts.length} style={{color, background}}>{name.substr(index, length)}</span>);
            name = name.substr(index + length);
            result.found = true;
            break;
          }
        }
        if (index === undefined) {
          result.parts.push(<span key={result.parts.length}>{name}</span>);
          name = "";
        }
      }
    }
    return result;
  };

  const rows = [];
  let index = 1;
  const alerts = node.get("alerts");
  alerts.forEach(name => {
    const result = highlightName(name, filters[0]);

    // if (!filters.length || result.found) {
      rows.push(
        <div key={index} className="alert-row">
          <div>{index}.</div>
          <div>{result.parts}</div>
        </div>
      );
      index++;
    // }
  });

  // let header;
  // // if (filters.length) {
  // //   header = `${rows.length} of ${alerts.size} alert${alerts.size > 1 ? "s" : ""} matching "${filters[0].text}".`;
  // // } else {
  // //   header = `${alerts.size} Alert${alerts.size === 1 ? "" : "s"}`;
  // // }

  return (
    <div className="alerts-section">
      {/* <div className="section-header">{header}</div> */}
      <div className="alert-names">{rows}</div>
    </div>
  );
}

AlertDetails.propTypes = {
  node: ImmutableProptypes.map.isRequired,
  filters: ImmutableProptypes.list.isRequired
};

const mapStateToProps = (state) => ({
  filters: getFilters(state)
});

export default connect(mapStateToProps)(AlertDetails);