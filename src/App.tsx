import { FC } from "react";
import "./App.css";
import { ConnectMetaMask } from "./components/ConnectMetaMask";
import { Routes, Route } from "react-router-dom";
import {MyWidgets} from "./components/MyWidgets";


export const App: FC<{}> = () => {
  
  return (
    <div className="App">
       <Routes>
            <Route path="/" element={<ConnectMetaMask />} />
            <Route path="/MyWidgets" element={<MyWidgets/>} />
      </Routes>
      {/* <ConnectMetaMask /> */}
    </div>
  );
};

export default App;
