import { FC, useEffect, useState } from "react";
import "./App.css";
import { ConnectMetaMask } from "./components/ConnectMetaMask";
import { Routes, Route } from "react-router-dom";
// import { MyWidgets } from "./components/widgets/MyWidgets";
import { Container } from "./components/navbar/Container";
import { MyWidgets } from "./components/widgets/MyWidgets";
import { Nav } from "./components/navbar/Nav";
import Main from "./components/widgets/Main";
import { sign } from "./utils/accountUtils";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { updateSignature } from "./store/reducer/signatureSlice";

declare let window: any;

export const App: FC<{}> = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { account } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account !== undefined) {
      const requestAccount = async () => {
        await window.ethereum.send("eth_requestAccounts");
      };
      requestAccount().catch(console.error);
      const signMessage = async () => {
        let signature = await sign(account);
        // console.log("the signature now is:", signature);
        if (signature !== null || signature !== undefined || signature !== "") {
          dispatch(updateSignature(signature));
          //navigate("/MyWidgets");
        }
      };
      signMessage().catch(console.error);
      setIsConnected(true);
    }
  }, [account]);

  return (
    <div>
      {/* <Container/> */}
      {/* <div className="main"> */}
      <Routes>
        <Route path="/" element={<ConnectMetaMask />} />
        {/* <Route path="/" element={<Container />} /> */}
        {/* <Route path="/" element={<MyWidgets />} /> */}
        <Route path="/MyWidgets" element={<Main />} />
      </Routes>
      {/* </div> */}
    </div>
  );
};

export default App;
