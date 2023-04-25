import React, { useContext, useEffect, useState } from "react";
import Candidate from "../../components/Candidate/Candidate";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import "./candidatesPage.scss";
import { dataContext } from "../../context";
import { Link } from "react-router-dom";

const CandidatesPage = () => {
  const [searchString, setSearchString] = useState("");
  const { candidates } = useContext(dataContext);
  const filterCandidates = candidates.filter((can) =>
    can?.name?.toLowerCase().includes(searchString.toLowerCase())
  );
  return (
    <div className="candidatesPage">
      <Header />
      <div id="candidate">
        {/* <h2>Candidates:</h2> */}
        <Search setSearchString={setSearchString} searchString={searchString} />
      </div>
      {filterCandidates?.map((e) => (
        <Link key={e.id} to={`/single-candidates/${e.id}`}>
          <Candidate setMessage={() => {}} setCandidate={() => {}} data={e} />
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default CandidatesPage;
