import "./App.css";
import { Routes, Route } from "react-router-dom";
import MintNFT from "./pages/MintNFT";
import { MainPage } from "./pages/MainPage";
import { ExploreNFTs } from "./pages/ExploreNFTs";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/MintNft" element={<MintNFT />}></Route>
          <Route path="/ExploreNfts" element={<ExploreNFTs />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
