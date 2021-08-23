import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./Modal.css";

export default function Modal(data) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  //console.log(SenatorData.SenatorData);
  // Prevents scrolling
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if (data.data.ticker.includes("href")) {
    const tickerName = data.data.ticker.split('>')[1].split('<');
    console.log(tickerName[0]);
    data.data.ticker = tickerName[0];
  }
  return (
    <>
    <Button  onClick={toggleModal} variant="outlined" color="primary">Details</Button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Details of {data.data.type}</h2>
            <p>
            Asset Type: {data.data.asset_type}
            </p>
            <p>
            Ticker: {data.data.ticker}
            <br>
            </br>
            Date: {data.data.transaction_date}
            <br>
            </br>
            Ownership: {data.data.owner}
            <br>
            </br>
            Amount: {data.data.owner}
            <br>
            </br>
            Comment: {data.data.comment}
            </p>
            <Link to={data.data.ptr_link}> "View Disclosure from EDF.gov"
            </Link>
            <Button  onClick={toggleModal} variant="outlined" color="primary">Close</Button>
          </div>
        </div>
      )}
    </>
  );
}