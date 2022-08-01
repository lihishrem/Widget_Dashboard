import React, { FC } from "react";
import { TopHeader } from "../widgets/TopHeader";
import "../widgets/widgetsStyle.css";

export const MainReporting: FC<{}> = () => {
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
      </div>
    </>
  );
};
