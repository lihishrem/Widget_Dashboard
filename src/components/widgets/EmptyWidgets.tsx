import React, { FC, useState } from "react";
import empty from "../../assets/images/empty state.svg";
import { AddWidget } from "./AddWidget";

export const EmptyWidgets: FC<{}> = () => {
  const [showAddWidget, setShowAddWidget] = useState(false);

  const handleCloseAdd = (toClose: boolean): void => {
    setShowAddWidget(false);
  };

  return (
    <>
      <div style={{ width: "-webkit-fill-available" }}>
        <div className="widgetsBox">
          <div className="wraperEmpty">
            <img src={empty} />
            <label className="widgetTitle">
              You don’t have any widget yet!
            </label>
            <label>Your widgets will appear here.</label>
            <button
              className="createWidgetBtn"
              onClick={() => setShowAddWidget(true)}
            >
              Create New Widget
            </button>
          </div>
        </div>
      </div>
      {showAddWidget && (
        <div className="allScreen">
          <AddWidget closeAddWidget={handleCloseAdd} />
        </div>
      )}
    </>
  );
};
