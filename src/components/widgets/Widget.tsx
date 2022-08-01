import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import React, { FC, useEffect, useState } from "react";
import imgg from "../../assets/images/Frame 2741.png";
import more from "../../assets/images/moreArrow.svg";


interface Props {
  widget: {
    widgetId: string;
    transactions?: number;
    widgetName: string;
    createdAt: string;
    // children?: JSX.Element|JSX.Element[];
  };
}

export const Widget: FC<Props> = ({ widget }) => {
  const src = "https://widget.xp.network?wid=";
  const linkToEditor = `https://widget-staging.xp.network/?widget=true&wsettings=true&wid=${widget.widgetId}`;
  const [iframeSrc, setIframeSrc] = useState("");
  const [creationDate, setcreationDate] = useState<Date>();

  useEffect(() => {
    let date = new Date(widget.createdAt);
    setcreationDate(date);
    console.log(date, "dateeee");
  }, [widget]);

  useEffect(() => {
    setIframeSrc(src + `${widget.widgetId}`);
  }, [widget.widgetId]);

  console.log("widget comppppppp", widget.transactions);

  const handleWidgetClick = () => {};
  return (
    <>
      <div className="widgetBox"> 
        <div className="leftWidgetBox">
          {/* <img src={imgg} style={{width:"96px"}}/> */}
          {/* <div className="iframeDiv"> */}
           <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              id={widget.widgetId}
              className="iframe"
            ></iframe>
          {/* </div> */}

          <div className="flexColumn">
            <label className="widgetTitle">Widget {widget.widgetId}</label>
            <label>
              {widget.transactions} Transactions | Created on{" "}
              {widget.createdAt.slice(0, 10)}
              {/* {creationDate ? creationDate : ""} */}
            </label>
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
          <Menu menuButton={<MenuButton className="editBtn">More &nbsp; <img src={more}/>
          </MenuButton>} transition >
                <MenuItem>Suspend widget</MenuItem>
                <MenuItem>Copy widget link</MenuItem>
                <MenuItem onClick={() => console.log("Print clicked")}>
                Rename widget
                </MenuItem>
                <MenuItem onClick={() => console.log("Print clicked")}>
                Delete widget
                </MenuItem>
              </Menu>
        </div>
      </div>
      <label className="divider" />
    </>
  );
};
