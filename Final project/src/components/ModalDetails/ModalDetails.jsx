import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./modalDetails.scss"
import { dataContext } from "../../context";

export const ModalDetails = ({data}) => {

  const MySwal = withReactContent(Swal);

  

 

  const openModal = () => {
    MySwal.fire({
      title: data.candidateName,
      html:
      <div className="modalDetails">
          <p>Company: {data.companyName}</p>
          <p>Interview Date: {data?.interviewDate?.slice(4, 16)}</p> 
          <p>Phase: {data.phase}</p>
          <p>Status: {data.status}</p>
          <p>Notes: {data.note}</p>
      
    </div>,
      showCloseButton: true,
      
      focusConfirm: false,
      
    })
  };

  return (
    <button className="tooltip1" onClick={openModal}>
      <img
            className="viewBtn"
            src="https://www.citypng.com/public/uploads/preview/eye-view-watching-white-icon-hd-png-11640343964lzueg8ktix.png"
            alt=""
          />
      

      <span className="tooltiptext1">remove</span>
    </button>
  );
};
















// import React from "react";
// import "./modalDetails.scss";

// const ModalDetails = ({ data }) => {
//   console.log(data);
//   if (!data) {
//     return null;
//   }
//   return (
   
//   );
// };

// export default ModalDetails;
