import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useAccount } from "wagmi";
import MintNFT from "./pages/MintNFT";
function App() {
  const { address, isConnected } = useAccount();
  return (
    <>
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
