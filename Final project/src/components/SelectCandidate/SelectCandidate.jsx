import React, { useContext, useState } from "react";
import Candidate from "../Candidate/Candidate";
import Search from "../Search/Search";
import "./selectCandidate.scss";
import { dataContext } from "../../context";

const SelectCandidate = ({ setPage, selectedCandidate, setCandidate }) => {
  const { candidates } = useContext(dataContext);
  const [message, setMessage] = useState("");
  const [searchString, setSearchString] = useState("");
  const filterCandidates = candidates.filter((can) =>
    can?.name?.toLowerCase().includes(searchString.toLowerCase())
  );

  const nextClick = () => {
    if (selectedCandidate) setPage(2);
    else {
      setMessage("CANDIDATE IS NOT SELECTED !!!");
    }
  };

  return (
    <div className="selectCandidate">
      <Search setSearchString={setSearchString} searchString={searchString} />

      <div>
        {filterCandidates.map((e) => (
          <Candidate
            data={e}
            key={e.id}
            isSelected={selectedCandidate?.id === e.id}
            setCandidate={setCandidate}
            setMessage={setMessage}
          />
        ))}
      </div>

      <div>
        {/* <button className="btnWizard" onClick={nextClick}>
          NEXT
        </button> */}
        <button onClick={nextClick}>
          <span class="label">Next</span>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
          </span>
        </button>


        <p className="msg">{message}</p>
      </div>
    </div>
  );
};

export default SelectCandidate;
