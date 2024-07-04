import Web3 from "web3";
import { toast } from 'react-toastify';
import fundraiser from "../../../api/fundraiser";
const startPayment = async ({setLoading, setError, setTxs, ether, addr, fundraiser_id }) => {
  try {
    setLoading(true);
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.getAccounts();
    const from = accounts[0];

    const value = web3.utils.toWei(ether, "ether");

    const tx = await web3.eth.sendTransaction({
      from,
      to: addr,
      value,
    });

    console.log({ ether, addr });
    console.log("tx", { tx });
    setLoading(false);
    await fundraiser.donate({ fundraiser_id, amountIncreased: ether });
    toast.success('Transaction successful, funds Transferred Successfully!');
    // setTxs([tx]);
  } catch (err) {
    // setError(err.message);
    console.log(err.message);
    toast.error('Transation failed.');

  }
};

export default startPayment;
