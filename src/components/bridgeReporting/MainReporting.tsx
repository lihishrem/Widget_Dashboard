import React, { FC } from "react";
import { TopHeader } from "../widgets/TopHeader";
import "../widgets/widgetsStyle.css";
import { Transactions } from "./Transactions";
import "./reporting.css";
import { useWeb3React } from "@web3-react/core";
import copyIcon from "../../assets/images/Nav icons/copy.svg";
import transactionsIcon from "../../assets/images/Nav icons/transactions.svg";
import usersIcon from "../../assets/images/Nav icons/user.svg";
import chainsIcon from "../../assets/images/Nav icons/chains.svg";
import { Status } from "./Status";

export const MainReporting: FC<{}> = () => {
  const { account, active } = useWeb3React();

  return (
    <>
      <div style={{ width: "-webkit-fill-available" }}>
        <div
          className="topHeaderRow"
          style={{ justifyContent: "space-between" }}
        >
          <label className="headerTitle">Bridge Reporting</label>
          <TopHeader />
        </div>
        <div className="wraper">
          <div className="flexRow">
            <label className="welcomeLabel">
              Welcome, &nbsp;
              <span style={{ color: "#395FEB" }}>
                {" "}
                {account?.slice(0, 8) + "..." + account?.slice(-4)}
              </span>
              <button className="copyImgIcon">
                <img
                  src={copyIcon}
                  onClick={() => navigator.clipboard.writeText("copied")}
                />
              </button>
            </label>
            <div className="buttonsRow">
              <button className="reportBtn">Today</button>
              <button className="reportBtn">Last 7 days</button>
              <button className="reportBtn">All period</button>
            </div>
          </div>
          <div className="flexRow" style={{ marginTop: "15px" }}>
            <div className="reportDetails">
              <div className="flexRow reportDetailsRow">
                <label className="iconName">
                  <img src={transactionsIcon} />
                  Transactons
                </label>
                <label>5,756</label>
              </div>
              <label className="line" />
              <div className="flexRow reportDetailsRow">
                <label className="iconName">
                  <img src={usersIcon} />
                  Users
                </label>
                <label>45</label>
              </div>
              <label className="line" />
              <div className="flexRow reportDetailsRow">
                <label className="iconName">
                  <img src={chainsIcon} />
                  Chains
                </label>
                <label>32</label>
              </div>
            </div>
            <div className="transactionBox"></div>
          </div>
          <Status status="completed"></Status>
          {/* <Transactions/> */}
        </div>
      </div>
    </>
  );
};
