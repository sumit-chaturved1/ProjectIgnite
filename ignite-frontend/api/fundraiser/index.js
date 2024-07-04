import axios from "axios";
import { baseUrl } from "../../src/shared/constants";
const authToken = localStorage.getItem("authToken");
const headers = {
  headers: {
    Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
  },
};
const fundraiser = {
  create: async (values) => {
    const url = `${baseUrl}/createFund`;
    const response = await axios.post(
      url,
      values,
      {
        withCredentials: true,
      },
      headers
    );
    console.log({ response });
    return response.data;
  },
  get: async (id) => {
    const url = `${baseUrl}/f/${id}`;
    const response = await axios.get(
      url,
      {
        withCredentials: true,
      },
      headers
    );
    console.log({ response });
    return response.data;
  },
  getAll: async () => {
    const url = `${baseUrl}/f`;
    const response = await axios.get(
      url,
      {
        withCredentials: true,
      },
      headers
    );
    console.log("response at here", { response });
    return response.data;
  },
  donate: async (values) => {
    const url = `${baseUrl}/updateFund`;
    const response = await axios.post(
      url,
      values,
      {
        withCredentials: true,
      },
      headers
    );
    console.log({ response });
    return response.data;
  },
};

export default fundraiser;
