import React from "react";
import ImmutableProptypes from "react-immutable-proptypes";
// import PropTypes from "prop-types";

import "./AlertDetails.scss";

function AlertDetails({ node, filters }) {

  const highlightName = (str) => {
    const result = {
      found: false,
      parts: []
    };

    if (!str) {
      return result;
    }

    if (!filters.length) {
      result.parts.push(<span key={result.parts.length}>{str}</span>);
    } else {
      const filterExpressions = filters.map(({ text, color, background }) => {
        return {
          exp: new RegExp(text, "i"),
          length: text.length,
          color,
          background
        };
      });
      while (str !== "") {
        let index;
        for(let i = 0; i < filterExpressions.length; i++) {
          const { exp, length, color, background } = filterExpressions[i];
          index = str.match(exp)?.index;
          if (index !== undefined) {
            const { parts: subParts } = highlightName(str.substr(0, index));
            if (subParts.length > 0) {
              result.parts.push(...subParts);
            }
            result.parts.push(<span className="highlighted" key={result.parts.length} style={{color, background}}>{str.substr(index, length)}</span>);
            str = str.substr(index + length);
            result.found = true;
            break;
          }
        }
        if (index === undefined) {
          result.parts.push(<span key={result.parts.length}>{str}</span>);
          str = "";
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

    rows.push(
      <div key={index} className="alert-row">
        <div>{index}.</div>
        <div>{result.parts}</div>
      </div>
    );
    index++;
  });

  return (
    <div className="alerts-section">
      <div className="alert-names">{rows}</div>
    </div>
  );
}

AlertDetails.propTypes = {
  node: ImmutableProptypes.map.isRequired,
  filters: ImmutableProptypes.list.isRequired
};

export default AlertDetails;