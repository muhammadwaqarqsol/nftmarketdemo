import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useAccount } from "wagmi";
import MintNFT from "./pages/MintNFT";
function App() {
  const { address, isConnected } = useAccount();
  return (
    <>
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
