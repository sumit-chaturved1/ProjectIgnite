import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import startPayment from "../../shared/functions/startPayment";

export function Modal({ open, setOpen, walletAddress, fundraiser_id }) {
  //   const [open, setOpen] = React.useState(false);
  // setError, setTxs, ether, addr
  const [error, setError] = useState("");
  const [txs, setTxs] = useState();
  const handleOpen = () => setOpen(!open);
  const [formData, setFormData] = useState({
    amount: 0,
    walletAddress: walletAddress,
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async () => {
    await startPayment({
      setLoading,
      setError,
      setTxs,
      ether: formData.amount,
      addr: formData.walletAddress,
      fundraiser_id
    });
    setOpen(false);
    console.log({ formData });
  };

  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              {loading ? "Sending ETH..." : "Send ETH"}{" "}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!loading && (
          <>
            <DialogBody>
              <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                Enter the amount of ETH you want to send.
              </Typography>
              <div className="grid gap-6">
                <Typography className="-mb-1" color="blue-gray" variant="h6">
                  Wallet Address
                </Typography>
                <Input
                  name="walletAddress"
                  value={formData.walletAddress}
                  placeholder="0x13..."
                  label="Recipient Wallet Address"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-6">
                <Typography className="-mb-1" color="blue-gray" variant="h6">
                  Amount
                </Typography>
                <Input
                  name="amount"
                  value={formData.amount}
                  placeholder="0 ETH"
                  label="ETH"
                  onChange={handleChange}
                />
              </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="gray" onClick={handleOpen}>
                cancel
              </Button>
              <Button variant="gradient" color="gray" onClick={handleSubmit}>
                send eth
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </>
  );
}
