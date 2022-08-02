import React, { FC, useState } from "react";
import closeBtn from "../../assets/images/closeBtn.svg";

interface FuncProps {
  closeUpdateWidget(toClose: boolean): void;
}

export const UpdateWidget: FC<FuncProps> = (props) => {
  const [widgetName, setWidgetName] = useState("");

  const handleClose = () => {
    props.closeUpdateWidget(true);
  };

  const handleUpdate = () => {
    //to do: update api call with the name updated
    handleClose();
  };

  return (
    <div className="addWidgetBox">
      <div className="addWidgetTitle">
        <label className="selfCenter">Update widget name</label>
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
        {/* <a
          href={`${linkToWidget}&name=${widgetName}`}
          target="_blank"
          className="createWidgetBtn"
          onClick={handleClose}
        > */}
        <button className="createWidgetBtn" onClick={handleUpdate}>
          Update Widget
        </button>

        {/* </a> */}
      </div>
    </div>
  );
};
