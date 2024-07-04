import Web3 from "web3";
import user from "../../../api/user";

export const onPressConnect = async ({ setAddress, setLoading }) => {
  setLoading(true);
  try {
    if (window?.ethereum?.isMetaMask) {
      // Desktop browser
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const account = Web3.utils.toChecksumAddress(accounts[0]);
      setAddress(account);
      const res = await user.setWalletAddress(account);
      console.log({ res });
    }
  } catch (error) {
    console.log(error);
  }

  setLoading(false);
};

export const onPressLogout = ({ setAddress }) => setAddress("");
