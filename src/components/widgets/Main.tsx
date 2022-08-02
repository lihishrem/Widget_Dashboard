import { useWeb3React } from "@web3-react/core";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getMyWidgetsBySignature } from "../../store/reducer/widgetSlice";
import { MainReporting } from "../bridgeReporting/MainReporting";
import { ConnectMetaMask } from "../ConnectMetaMask";
import { Container } from "../navbar/Container";
import { MyWidgets } from "./MyWidgets";

export const Main: FC<{}> = () => {
  const { account, active } = useWeb3React();
  const { signature } = useSelector((state: any) => state.signature);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <div className="App">
      <Container />
      <div className="main">
        <MyWidgets />
        {/* <MainReporting/> */}
      </div>
    </div>
  );
};

export default Main;
