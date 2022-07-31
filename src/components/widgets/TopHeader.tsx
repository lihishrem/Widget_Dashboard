import { useWeb3React } from "@web3-react/core";
import React, { FC } from "react";
import helpcenter from "../../assets/images/helpcenterBlack.svg";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useNavigate } from "react-router-dom";

export const TopHeader: FC<{}> = () => {
  const { account } = useWeb3React();
  const navigate = useNavigate();
  console.log("changeddd", account);

  return (
    <div className="topHeaderRight">
      <label className="imgTextLabel">
        <img src={helpcenter} /> Helpcenter
      </label>
      <label className="imgTextLabel accountLabel">
        {account ? (
          account.slice(0, 4) + "..." + account.slice(-4)
        ) : (
          <button className="pleaseConnectBtn" onClick={() => navigate("/")}>
            Please Connect
          </button>
        )}
        {account && (
          <Jazzicon diameter={18} seed={jsNumberForAddress(`${account}`)} />
        )}
      </label>
    </div>
  );
};
