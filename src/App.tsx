import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useAccount } from "wagmi";

import Hero from "./componensts/hero";
import NftCardContainer from "./componensts/NftCardContainer";

import MintNFT from "./pages/MintNFT";
 
function App() {
  return (
    <>
      <Hero />
      <NftCardContainer />
      <div>
        <div>Connected Wallet: {isConnected ? address : "Conect First"}</div>
        <Routes>
          <Route path="/"></Route>
          <Route path="/MintNft" element={<MintNFT />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
