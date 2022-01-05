import React from "react";

const AlertsStats = () => {
  const ary = [{
    name: "30% Point Rate Increase",
    count: 5
  }, {
    name: "50% Point Rate Drop (CS)",
    count: 15
  }];

  const stats = ary.map(({ name, count }) => {
    return (
      <div key={name}>
        <span>{name}</span>
        <span>{count}</span>
      </div>
    );
  });

  return (
    <div className="alerts-stats">
      <div>{stats}</div>
    </div>
  );
};

export default AlertsStats;