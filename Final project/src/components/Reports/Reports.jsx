import React from "react";
import "./reports.scss";

const Reports = ({ data, setModalData }) => {
  return (
    <div className="reports">
      <div>
        <div>{data.companyName}</div>
        <div>{data.interviewDate.slice(4, 16)}</div>
        <div>
          {data.status}{" "}
          <div className="eye">
            <button
              onClick={() => {
                setModalData(data);
              }}
            >
              <img
                className="viewBtn"
                src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915455_1280.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
