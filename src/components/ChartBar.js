import React from "react";

const ChartBar = (props) => {
  let barHeight = "0%";

  if (props.max > 0) {
    barHeight = Math.round((props.value / props.max) * 100) + "%";
  }
  return (
    <div className="my-4 d-flex flex-column align-items-center">
      <div className="rounded border border-secondary d-flex align-items-end chart-bar">
        <div
          className="bg-dark rounded w-100"
          style={{ height: barHeight }}
        ></div>
      </div>
      <div className="fw-bold mt-1">{props.label}</div>
    </div>
  );
};

export default ChartBar;
