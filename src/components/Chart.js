import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.data.map((data) => data.value);
  const maxValue = Math.max(...values);

  return (
    <div className="d-flex justify-content-evenly">
      {props.data.map((data) => (
        <ChartBar
          value={data.value}
          label={data.label}
          max={maxValue}
          key={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
