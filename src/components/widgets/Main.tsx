import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainReporting } from "../bridgeReporting/MainReporting";
import { ConnectMetaMask } from "../ConnectMetaMask";
import { Container } from "../navbar/Container";
import { MyWidgets } from "./MyWidgets";

export const Main: FC<{}> = () => {
  return (
    <div className="App">
      <Container />
      <div className="main">
        {/* <MyWidgets/> */}
        <MainReporting/>
      </div>
      
    </div>
  );
};

export default Main;
