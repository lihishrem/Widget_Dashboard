import React, { FC } from "react";
import "./navbarStyle.css";
// import xpLogo from "/src/assets/images/Nav icons/xp logo sign.svg";
import xpLogo from "../../assets/images/Nav icons/xp logo sign.svg";
import allWidgets from "../../assets/images/Nav icons/all widgets.svg";
import reporting from "../../assets/images/Nav icons/reporting.svg";
import notifications from "../../assets/images/Nav icons/notifications.svg";

export const Nav: FC<{}> = () => {
  return (
    <div className="navbar">
      <div className="navIconContainer">
        <img src={xpLogo} />
      </div>
      <div className="drawerIconsContainer">
        <button className="iconBox">
          <img src={allWidgets} />
        </button>
        <button className="iconBox">
          <img src={reporting} />
        </button>
        <button className="iconBox">
          <img src={notifications} />
        </button>
      </div>
    </div>
  );
};
