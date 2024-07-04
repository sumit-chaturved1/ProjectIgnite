import React, { useEffect, useState } from "react";
import { cardData } from "../../shared/constants";
import { useParams } from "react-router-dom";
import CircularWithValueLabel from "./CircularProgress";
import { Modal } from "../../assets/components/PaymentModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fundraiser from "../../../api/fundraiser";
import { CircularProgress } from "@mui/material";
function DescriptionPage() {
  const params = useParams();
  const [data, setData] = useState();
  useEffect(() => {
      fundraiser.get(params.id).then((res) => setData(res.data));
  }, []);
  console.log({ data });
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  return (
    data ? 
    <div className="description-card">
      <div className="fund-stat">
        <img className="desc-image" src={data.image} alt="image" />
        {/* <p className="founder">created by {data.createdBy}</p> */}
      </div>
      <div className="fund-data">
        <h1 className="fund-title">{data.title}</h1>
        <h3 className="fund-desc">{data.desc}</h3>
        <div className="fund-raised-data">
          <CircularWithValueLabel
            value={(data.raisedAmount / data.raisingAmount) * 100}
          />
          <div className="fund-raised-text">
            <p>Raised</p>
            <p>
              {data.raisedAmount} Eth of {data.raisingAmount} Eth{" "}
            </p>
          </div>
        </div>
        <div className="donate-fund">
          <p className="tax-benefit">
            Receive tax benefits by donating to this cause.
          </p>
          <button onClick={setOpenPaymentModal} className="donate-button">
            Donate Now
          </button>
          {openPaymentModal && (
            <Modal
              open={openPaymentModal}
              setOpen={setOpenPaymentModal}
              walletAddress={data.walletAddress}
              fundraiser_id={data._id}
            />
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
    : 
    <CircularProgress />
  );
}

export default DescriptionPage;
