import { useWeb3React } from "@web3-react/core";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMyWidgetsBySignature } from "../store/reducer/widgetSlice";
import Transactions from "./Transactions";
import { Widget } from "./Widget";

export const MyWidgets: FC<{}> = () => {
  //http://localhost:3001/?widget=true&wsettings=true
  //https://widget.xp.network/?widget=true&wsettings=true
  const linkToWidget = "http://localhost:3001/?widget=true&wsettings=true";
  const dispatch = useDispatch();
  const { signature } = useSelector((state: any) => state.signature);
  const { widgets } = useSelector((state: any) => state.widgets.widgets);
  const { account, active } = useWeb3React();
  console.log("im here", widgets);
  console.log("account changed my widgets", account);

  useEffect(() => {
    console.log("im in the uef", account, signature);
    dispatch(
      getMyWidgetsBySignature({
        signature: signature,
        address: account,
      })
    );
    console.log("im here", widgets);
  }, [account, signature]);

  return (
    <>
      <div>
        <h1>My Widgets</h1>
        {console.log("widgets arr:", widgets)}
        {widgets?.map((widget: any, index: number) => {
          return <Widget key={index} widgetId={widget} />;
        })}

        <a className="addWidgetBtn" href={linkToWidget}>
          Add New Widget
        </a>
        <Transactions />
      </div>
    </>
  );
};
