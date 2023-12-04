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
        <div>
          {isConnected ? (
            <p className="text-purple-600 font-bold">
              Connected As : {address}
            </p>
          ) : (
            <p className="text-red-500 font-bold">Connect First to Mint</p>
          )}
        </div>
        <Routes>
          <Route path="/"></Route>
          <Route path="/MintNft" element={<MintNFT />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
