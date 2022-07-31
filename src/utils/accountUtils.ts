import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
//import { getCookie, setCookie } from "./cookiesUtils";

declare let window: any;

export const MSG = "Please sign in order to see your widgets";

export const InjectedMetaMask: any = new InjectedConnector({
  supportedChainIds: [4, 1, 3, 5, 42, 137, 80001,56],
});

export const sign = async (account: string | null | undefined) => {
  var address, signature;
  // let user = JSON.parse(getCookie("user"));
  // if (user.address !== account) {
  // delete cookie and set new cookie
  // sign
  try {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    //console.log("setting a new cookie");
    signature = await signer.signMessage(MSG);
    console.log("signature", signature);

    address = await signer.getAddress();
    console.log(address, signature);
    // document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // setCookie("user", { signature, address }, 31);
    return signature;
  } catch (e) {
    return "";
    console.log(e);
  }
  // } else {
  //   return user.signature;
  // }
};
