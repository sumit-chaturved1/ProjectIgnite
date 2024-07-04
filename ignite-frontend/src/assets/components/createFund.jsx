import { useState } from "react";
import { useFormik } from "formik";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react"; // Assuming you're using material-tailwind for UI components
import fundraiser from "../../../api/fundraiser";
import { toast } from "react-toastify";

const CreateFund = ({ open, setOpen }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const createFundForm = useFormik({
    initialValues: {
      title: "",
      desc: "",
      raisingAmount: "",
      raisedAmount: "",
      image: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const res = await fundraiser.create(values);
      console.log({ res });
      setLoading(false);
      setOpen(false);
      if(res.success)
        toast.success('Fundraiser Created Successfully.');
      else
        toast.error('Fundraiser creation failed, try again.');
    },
  });

  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <Dialog open={open} size="xs" handler={handleOpen}>
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <Typography className="mb-1" variant="h4">
            {loading ? "Creating Fundraiser" : "Create Fundraiser"}
          </Typography>
        </DialogHeader>
      </div>
      {!loading && (
        <>
          <DialogBody>
            <Typography className="mb-10 -mt-7" color="gray" variant="lead">
              Enter Details
            </Typography>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Title
              </Typography>
              <Input
                name="title"
                value={createFundForm.values.title}
                placeholder="Enter title"
                label="Title"
                onChange={createFundForm.handleChange}
              />
            </div>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Description
              </Typography>
              <Input
                name="desc"
                value={createFundForm.values.desc}
                placeholder="Enter description"
                label="Description"
                onChange={createFundForm.handleChange}
              />
            </div>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Raising Amount
              </Typography>
              <Input
                name="raisingAmount"
                value={createFundForm.values.raisingAmount}
                placeholder="0 ETH"
                label="Raising Amount"
                onChange={createFundForm.handleChange}
              />
            </div>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Image URL
              </Typography>
              <Input
                name="image"
                value={createFundForm.values.image}
                placeholder="Enter image URL"
                label="Image URL"
                onChange={createFundForm.handleChange}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="gray"
              onClick={createFundForm.handleSubmit}
            >
              Create Fundraiser
            </Button>
          </DialogFooter>
        </>
      )}
    </Dialog>
  );
};

export default CreateFund;
