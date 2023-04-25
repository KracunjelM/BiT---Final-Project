import React from "react";
import "./reportAdmin.scss";
import { ModalDelete } from "../../components/ModalDelete/ModalDelete";
import { ModalDetails } from "../ModalDetails/ModalDetails";
const ReportAdmin = ({ data, setModalData }) => {
  return (
    <div className="reportAdmin">
      <div>
        <p>{data?.companyName}</p>
        <span>Company</span>
      </div>
      <div>
        <p>{data?.candidateName}</p>
        <span>Candidate</span>
      </div>
      <div>
        <p>{data?.interviewDate.slice(4, 16)}</p>
        <span>Interview Date</span>
      </div>
      <div>
        <p>{data?.status}</p>
        <span>Status</span>
      </div>
      <div>
    
        <ModalDetails data={data}/>
        <ModalDelete id={data?.id} />
      
      </div>
    </div>
  );
};

export default ReportAdmin;
