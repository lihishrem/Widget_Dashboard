import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useWeb3React } from "@web3-react/core";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyWidgetsBySignature } from "../../store/reducer/widgetSlice";
import { AddWidget } from "./AddWidget";
import { EmptyWidgets } from "./EmptyWidgets";
import { TopHeader } from "./TopHeader";
import { Widget } from "./Widget";
import "./widgetsStyle.css";
// import { Widget } from "./Widget";

export const MyWidgets: FC<{}> = () => {
  const linkToWidget =
    "https://widget-staging.xp.network/?widget=true&wsettings=true&wid=create";
  const [showAddWidget, setShowAddWidget] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signature } = useSelector((state: any) => state.signature);
  const { widgets } = useSelector((state: any) => state.widgets);
  const { account, active } = useWeb3React();
  console.log("widgetssssss (my widgets comp)------------->", widgets);
  console.log("account changed my widgets", account);

  useEffect(() => {
    if (window.performance && !active) {
      if (performance.navigation.type == 1) {
        navigate("/");
      }
    }
  }, []);

  useEffect(() => {
    console.log("uef", account, signature);
    if (account || active) {
      try {
        dispatch(
          getMyWidgetsBySignature({
            signature: signature,
            address: account,
          })
        );
      } catch (e) {
        console.log(e);
      }
    }
  }, [account, signature]);

  const handleCloseAdd = (toClose: boolean): void => {
    setShowAddWidget(false);
  };

  return (
    <>
      <div style={{ width: "-webkit-fill-available" }}>
        <div
          className="topHeaderRow"
          style={{ justifyContent: "space-between" }}
        >
          <label className="headerTitle">My Widgets</label>
          <TopHeader />
        </div>
        {widgets === undefined ? (
          <EmptyWidgets />
        ) : (
          <div className="widgetsBox" style={{ paddingBottom: "34px" }}>
            <div className="buttonsBox">
              {/* <button className="showAllBtn">Show All</button> */}
              <Menu menuButton={<MenuButton className="showAllBtn">Show All</MenuButton>} transition >
                <MenuItem>Active widgets</MenuItem>
                <MenuItem>Suspended widgets</MenuItem>
                <MenuItem onClick={() => console.log("Print clicked")}>
                  All widgets...
                </MenuItem>
              </Menu>
              <button
                className="createWidgetBtn"
                onClick={() => setShowAddWidget(true)}
              >
                Create New Widget
              </button>
            </div>
            <label className="divider" />
            <div className="widgetsContainer">
              {widgets?.slice(0, 4).map((widget: any, index: number) => {
                return <Widget key={index} widget={widget} />;
              })}
            </div>
          </div>
        )}

        {/* <a className="addWidgetBtn" href={linkToWidget} target="_blank">
          Add New Widget
        </a> */}
      </div>

      {showAddWidget && (
        <div className="allScreen">
          <AddWidget closeAddWidget={handleCloseAdd} />
        </div>
      )}
    </>
  );
};
