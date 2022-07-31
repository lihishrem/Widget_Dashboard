import { FC, useEffect, useState } from "react";
import metaIcon from "../assets/images/MetaMaskIcon.svg";
import { useWeb3React } from "@web3-react/core";
import { InjectedMetaMask, MSG, sign } from "../utils/accountUtils";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { getMyWidgetsBySignature } from "../store/reducer/widgetSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSignature } from "../store/reducer/signatureSlice";
import { MyWidgets } from "./widgets/MyWidgets";
import { EmptyWidgets } from "./widgets/EmptyWidgets";
import xpLogo from "../assets/images/Nav icons/xp logo sign.svg";
import helpcenter from "../assets/images/helpcenter.svg";
import linkedin from "../assets/images/media/linkedin icon.svg";
import telegram from "../assets/images/media/telegram icon.svg";
import twitter from "../assets/images/media/twitter icon.svg";
import redit from "../assets/images/media/redit icon.svg";
import poweredBy from "../assets/images/poweredBy.svg";

// import { getCookie, setCookie } from "../utils/cookiesUtils";
// import { MyWidgets } from "./MyWidgets";

declare let window: any;

export const ConnectMetaMask: FC<{}> = () => {
  const { ethereum } = window;
  const [isMetaConnected, setIsMetaConnected] = useState(false);

  const { signature } = useSelector((state: any) => state.signature);
  const { activate, account, chainId, library, active } = useWeb3React();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // const { widgets } = useSelector((state: any) => state.widgets);
  // const { signature } = useSelector((state: any) => state.signature);
  // // console.log("widgets", widgets);
  // console.log("signature", signature);
  // console.log("account changed", account);

  // useEffect(() => {
  //   if (isMetaConnected) {
  //     const requestAccount = async () => {
  //       await window.ethereum.send("eth_requestAccounts");
  //     };
  //     requestAccount().catch(console.error);
  //     const signMessage = async () => {
  //       let signature = await sign(account);
  //       // console.log("the signature now is:", signature);
  //       if (signature !== null || signature !== undefined || signature !== "") {
  //         //setSignature(signature);
  //         dispatch(updateSignature(signature));
  //         //navigate("/MyWidgets");
  //       }
  //     };
  //     signMessage().catch(console.error);
  //   }
  // }, [account]);

  const connectMetaMaskWalletHandler = async () => {
    if (!ethereum) {
      console.log("please install MetaMask");
    } else {
      try {
        console.log("im trying to activate");
        await activate(InjectedMetaMask);
        setIsMetaConnected(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (isMetaConnected && signature !== undefined && signature !== "") {
      navigate("/myWidgets");
    }
  }, [isMetaConnected, signature]);
  return (
    <>
      {!isMetaConnected && (
        <div className="allScreen" style={{ background: "#282829" }}>
          <div className="wraperConnect">
            <div className="mainWebsiteHeader">
              <div className="websiteLogo">
                <img src={xpLogo} />
              </div>
              <a
                href="https://t.me/XP_NETWORK_Bridge_Support_Bot?start=startwithxpbot"
                className="helpCenter"
              >
                <img src={helpcenter} /> <span>Helpcenter</span>
              </a>
            </div>
            <div className="connectWalletCompDiv">
              <label className="connectWalletLabel">Connect your wallet </label>

              <button
                className="WalletBtn"
                onClick={connectMetaMaskWalletHandler}
              >
                <img src={metaIcon} alt="meta-icon" className="metaIcon"></img>
                MetaMask
              </button>
            </div>
            <div className="mainWebsiteFooter">
              <div className="mediaIconsDiv">
                <a href="https://twitter.com/xpnetwork_">
                  <img src={linkedin} className="mediaIcon" />
                </a>
                <a href="https://twitter.com/xpnetwork_">
                  <img src={telegram} className="mediaIcon" />
                </a>
                <a href="https://twitter.com/xpnetwork_">
                  <img src={twitter} className="mediaIcon" />
                </a>
                <a href="https://twitter.com/xpnetwork_">
                  <img src={redit} className="mediaIcon" />
                </a>
              </div>
              <img src={poweredBy} />
            </div>
          </div>
        </div>
      )}
      <div>
        {/* {isMetaConnected && signature !== undefined && signature !== "" && (
           <MyWidgets />
          //<EmptyWidgets />
        )} */}
      </div>
      {console.log("the signature", signature)}
    </>
  );
};
