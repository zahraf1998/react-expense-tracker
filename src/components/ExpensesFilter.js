import React from "react";

const ExpensesFilter = (props) => {
  const years = [];
  const createNumbersRange = (start, end) => {
    for (let i = start; i <= end; i++) {
      years.push(i);
    }
  };
  createNumbersRange(2000, 2040);

  const changeYearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="d-flex justify-content-between">
      <label className="fs-6 fw-bold m-2">Filter by year</label>
      <select
        value={props.year}
        className="btn btn-dark"
        onChange={changeYearHandler}
      >
        {years.map((year) => (
          <option key={year} value={year} className="fw-bold">
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpensesFilter;
