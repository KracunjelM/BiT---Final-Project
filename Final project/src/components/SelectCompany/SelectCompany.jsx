import React, { useContext, useState } from "react";
import Search from "../Search/Search";
import "./selectCompany.scss";
import { dataContext } from "../../context";

const SelectCompany = ({ setPage, setCompany, selectedCompany, candidate,filterReportsByCandidateAndCompany }) => {
  const { companies, reports } = useContext(dataContext);
  const [message, setMessage] = useState("");
  const [searchString, setSearchString] = useState("");
  const filterCompanies = companies.filter((can) =>
    can?.name?.toLowerCase().includes(searchString.toLowerCase())
  );

  const nextClick = () => {
    if (selectedCompany) setPage(3);
    else setMessage("COMPANY IS NOT SELECTED !!!");
  };

  return (
    <div className="selectCompany">
      <Search setSearchString={setSearchString} searchString={searchString} />

      {filterCompanies.map((e) => (
        !(filterReportsByCandidateAndCompany(reports,candidate,e).find((r)=>(
          r?.phase==='final' || r?.status==='declined'
        ))) && 
        <div
          key={e.id}
          className={`${
            selectedCompany?.name === e.name ? "click" : ""
          } company`}
          onClick={() => {
            setCompany(e);
            setMessage("");
          }}
        >
          {e.name}
        </div>
      ))}

      <div>
        <button onClick={() => setPage(1)}>
          <span class="label">Back</span>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
          </span>
        </button>
        <div className="btn-msg">
        <button onClick={nextClick}>
          <span class="label">Next</span>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
          </span>
        </button>
          <p className="msg">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;
