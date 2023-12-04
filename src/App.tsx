import "./App.css";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import Hero from "./componensts/hero";
import NftCardContainer from "./componensts/NftCardContainer";

function App() {
  return (
    <>
      <Hero />
      <NftCardContainer />
    </>
  );
}

export default App;
