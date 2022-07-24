import { FC, useEffect, useState } from "react";
import metaIcon from "../assets/images/MetaMaskIcon.png";
import { useWeb3React } from "@web3-react/core";
import { InjectedMetaMask, MSG, sign } from "../utils/accountUtils";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { getMyWidgetsBySignature } from "../store/reducer/widgetSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSignature } from "../store/reducer/signatureSlice";
import { getCookie, setCookie } from "../utils/cookiesUtils";
import { MyWidgets } from "./MyWidgets";

declare let window: any;

export const ConnectMetaMask: FC<{}> = () => {
  const { ethereum } = window;
  const [isMetaConnected, setIsMetaConnected] = useState(false);
  const { activate, account, chainId, library, active } = useWeb3React();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // const { widgets } = useSelector((state: any) => state.widgets);
  const { signature } = useSelector((state: any) => state.signature);
  // console.log("widgets", widgets);
  console.log("signature", signature);
  console.log("account changed", account);

  useEffect(() => {
    if (isMetaConnected) {
      const requestAccount = async () => {
        await window.ethereum.send("eth_requestAccounts");
      };
      requestAccount().catch(console.error);
      const signMessage = async () => {
        let signature = await sign(account);
        console.log("the signature now is:", signature);
        if (signature !== null || signature !== undefined || signature !== "") {
          dispatch(updateSignature(signature));
          //navigate("/MyWidgets");
        }
      };
      signMessage().catch(console.error);
    }
  }, [account]);

  const connectMetaMaskWalletHandler = async () => {
    if (!ethereum) {
      console.log("please install MetaMask");
    } else {
      try {
        await activate(InjectedMetaMask);
        setIsMetaConnected(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {!isMetaConnected && (
        <div className="connectWalletCompDiv">
          <div className="flexRow">
            <label className="connectWalletLabel">Connect Wallet</label>
          </div>

          <button className="WalletBtn" onClick={connectMetaMaskWalletHandler}>
            <img src={metaIcon} alt="meta-icon"></img>
            MetaMask
          </button>
        </div>
      )}
      <div>
        {isMetaConnected && signature !== undefined && signature !== "" && (
          <MyWidgets />
        )}
      </div>
      {console.log("the signature", signature)}
    </>
  );
};
