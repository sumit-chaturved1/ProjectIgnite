import axios from "axios";
import { baseUrl } from "../../src/shared/constants";
const authToken = localStorage.getItem("authToken");
const user = {
  setWalletAddress: async (walletAddress) => {
    const url = `${baseUrl}/u/walletAddress`;
    const response = await axios.patch(
      url,
      { walletAddress },
      {
        headers: {
          Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
        },
      }
    );
    return response.data;
  },
};
export default user;
