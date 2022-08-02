import React, { FC } from "react";
import completed from "../../assets/images/status/completed.svg";
import canceled from "../../assets/images/status/canceled.svg";
import failed from "../../assets/images/status/failed.svg";
import pending from "../../assets/images/status/pending.svg";

const colors = {
  completed: "#10B67A",
  canceled: "#D7600A",
  failed: "#C23165",
  pending: "#C058FF",
};

interface Props {
  status: string;
}

export const Status: FC<Props> = ({ status }) => {
  const src = status;  
  //   console.log("color",colors[status]);

  //   const fontColor = colors[status];
  console.log(status);
  return (
    <>
    <div className="statusLabel">
      <img src={status} />
      {status}
    </div>
    </>
  );
};
