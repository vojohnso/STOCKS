import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./Modal.css";

export default function Modal(SenatorData) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  console.log(SenatorData.SenatorData);
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <Button  onClick={toggleModal} variant="outlined" color="primary">Details</Button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Details of {SenatorData.SenatorData.type}</h2>
            <p>
            Asset Type: {SenatorData.SenatorData.asset_type}
            </p>
            <p>
            Ticker: {SenatorData.SenatorData.ticker}
            <br>
            </br>
            Date: {SenatorData.SenatorData.transcation_date}
            <br>
            </br>
            Ownership: {SenatorData.SenatorData.owner}
            <br>
            </br>
            Amount: {SenatorData.SenatorData.owner}
            <br>
            </br>
            Comment: {SenatorData.SenatorData.comment}
            </p>
            <Link to={SenatorData.SenatorData.ptr_link}> "View Disclosure from EDF.gov"
            </Link>
            <Button className="close-modal" onClick={toggleModal} variant="outlined" color="primary">
              CLOSE
            </Button>
          </div>
        </div>
      )}
    </>
  );
}