import React from "react";

const Card = (props) => {
  const classes = `${props.className} rounded shadow`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
