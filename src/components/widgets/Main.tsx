import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ConnectMetaMask } from "../ConnectMetaMask";
import { Container } from "../navbar/Container";
import { MyWidgets } from "./MyWidgets";

export const Main: FC<{}> = () => {
  return (
    <div className="App">
      <Container />
      <div className="main">
        <MyWidgets/>
      </div>
      
    </div>
  );
};

export default Main;
