import React from "react";
import "./info.scss";
const Info = ({ data, title }) => {
  return (
    <div className="info">
      <div>
        <p>{title}</p>
        <h2>{data}</h2>
      </div>
    </div>
  );
};

export default Info;
