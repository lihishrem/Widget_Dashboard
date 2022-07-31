import React, { FC, useEffect } from "react";
import imgg from "../../assets/images/Frame 2741.png";

interface Props {
  widgetId: string;
}

export const Widget: FC<Props> = ({ widgetId }) => {
  const linkToEditor = `https://widget-staging.xp.network/?widget=true&wsettings=true&wid=${widgetId}`;

  console.log("widget comppppppp",widgetId);
  
  const handleWidgetClick = () => {};
  return (
    <>
      <div className="widgetBox">
        <div className="leftWidgetBox">
          <img src={imgg} style={{width:"96px"}}/>
          {/* <iframe src='https://widget.xp.network?wid=62d57f9085a8e0368a0bf7e1' width="100%" height="100%" id="xpnetWidget"></iframe> */}
          <div className="flexColumn">
            <label className="widgetTitle">Widget {widgetId}</label>
            <label>180 Transactions | Created on Sep 9, 2022</label>
          </div>
        </div>
        <div className="rightWidgetBox">
          <a
            href={linkToEditor}
            target="_blank"
            onClick={handleWidgetClick}
            className="editBtn"
          >
            Edit widget
            {/* {widgetId} */}
          </a>
          <button>More</button>
        </div>
      </div>
      <label className="divider" />
    </>
  );
};
