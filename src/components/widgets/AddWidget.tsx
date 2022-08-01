import React, { FC, useState } from "react";
import closeBtn from "../../assets/images/closeBtn.svg";

interface FuncProps {
  closeAddWidget(toClose: boolean): void;
}

export const AddWidget: FC<FuncProps> = (props) => {
  const [widgetName, setWidgetName] = useState("");
  const linkToWidget =
    "https://widget-staging.xp.network/?widget=true&wsettings=true&wid=create";

  const handleClose = () => {
    props.closeAddWidget(true);
  };

  return (
    <div className="addWidgetBox">
      <div className="addWidgetTitle">
        <label className="selfCenter">Add new widget</label>
        <button className="closeBtn" onClick={handleClose}>
          <img src={closeBtn} />
        </button>
      </div>
      <div className="inputAddWidget">
        Widget name
        <input
          type="text"
          placeholder="Type widget name"
          className="inputBox"
          onChange={(e) => setWidgetName(e.target.value)}
        />
      </div>
      <div className="flexRowBtns">
        <button className="canceLBtn" onClick={handleClose}>
          Cancel
        </button>
        <a
          href={`${linkToWidget}&name=${widgetName}`}
          target="_blank"
          className="createWidgetBtn"
          onClick={handleClose}
        >
          Add Widget
        </a>
      </div>
    </div>
  );
};
