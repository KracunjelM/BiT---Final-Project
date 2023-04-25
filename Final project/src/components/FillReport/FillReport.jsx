import React, { useState, useContext } from "react";
import { dataContext } from "../../context";
import "./fillReport.scss";
import { useHistory } from "react-router-dom";
const FillReport = ({
  setPage,
  candidate,
  company,
  filterReportsByCandidateAndCompany,
}) => {
  const history = useHistory();
  const { token, reports } = useContext(dataContext);
  // const token = localStorage.getItem("token");
  const [submitFail, setSubmitFail] = useState("");
  const { setUpdateReports } = useContext(dataContext);
  const { updateReports } = useContext(dataContext);
  const array = filterReportsByCandidateAndCompany(reports, candidate, company);
  const phase = (() => {
    let phase;
    if (array.length === 0) {
      phase = "cv";
    } else if (array.find((e) => (e.phase === "tech"))) {
      phase = "final";
    } else if (array.find((e) => (e.phase === "hr"))) {
      phase = "tech";
    } else if (array.find((e) => (e.phase === "cv"))) {
      phase = "hr";
    }
    return phase;
  })(array);
  console.log(phase,array)
  // const phases = ["cv", "hr", "tech", "final"];
  // const phase = phases[array.length];

  const newReport = {
    candidateId: candidate?.id,
    candidateName: candidate?.name,
    companyId: company?.id,
    companyName: company?.name,
    interviewDate: "",
    phase,
    status: "",
    note: "",
  };

  console.log(3);
  console.log(newReport.interviewDate);
  console.log(newReport.status);
  function submitReport() {
    if (
      newReport.interviewDate !== "" &&
      // newReport.phase !== "" &&
      newReport.status !== ""
    ) {
      fetch("http://localhost:3333/664/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newReport),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Success:", result);
          setUpdateReports(!updateReports);
          history.push("/reports-page", { createdReport: true });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setSubmitFail("Please select all fields");
    }
  }
 
  return (
    <div className="fillReport">
      <div>
        <div>
          <label>Date:</label>

          <input className="input"
            type="date"
            onChange={(e) => {
              let date = new Date(e.target.value);
              date = date.toString();
              newReport.interviewDate = date;
            }}
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div>
          <label>Phase:</label>

          <p className="inputPhase">{phase}</p>
        </div>
        <div>
          <label>Status:</label>

          <select className="input"
            name="status"
            id="status"
            defaultValue="-select-"
            onChange={(e) => (newReport.status = e.target.value)}
          >
            <option value="-select-" disabled>
              -select-
            </option>
            <option value="passed">Passed</option>
            <option value="declined">Declined</option>
          </select>
        </div>
      </div>
      <div className="notes">
        <label>Notes:</label>
        <textarea className="input"
        placeholder="Write here..."
          type="textarea"
          onChange={(e) => (newReport.note = e.target.value)}
        />
      </div>
      <div className="btn-msg">
      <button onClick={() => setPage(2)}>
          <span class="label">Back</span>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
          </span>
        </button>
        <div>
          
          <button className="btn-next-prev" onClick={() => {
              submitReport();
            }}>
          <span class="label">Submit</span>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
          </span>
        </button>
          <p className="msg">{submitFail}</p>
        </div>
      </div>
    </div>
  );
};

export default FillReport;
