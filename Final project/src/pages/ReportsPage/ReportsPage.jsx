import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ReportAdmin from "../../components/ReportAdmin/ReportAdmin";
import Search from "../../components/Search/Search";
import { Link, useLocation } from "react-router-dom";
import { dataContext } from "../../context";
import "./reportsPage.scss";

const ReportsPage = () => {
  const { reports } = useContext(dataContext);


  const location = useLocation();
  const [searchString, setSearchString] = useState("");
  const filterCandidates = reports.filter((can) =>
    can?.candidateName?.toLowerCase().includes(searchString.toLowerCase())
  );

  console.log(location.state);
  
  return (
    <div className="reportsPage">
      <Header />
      <Search setSearchString={setSearchString} searchString={searchString} />
      {filterCandidates?.reverse()?.map((e) => (
        <ReportAdmin
          // setModalData={setModalData}
          data={e}
          key={e.id}
        />
      ))}

      {/* <Modal isOpenModal={modalData} closeModal={() => setModalData(null)}>
        <ModalDetails data={modalData} />
      </Modal>
      <Modal
        isOpenModal={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
      ></Modal> */}
      <Footer />
    </div>
  );
};

export default ReportsPage;
