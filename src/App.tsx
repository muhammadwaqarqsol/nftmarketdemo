import "./App.css";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

function App() {
  const { address, isConnected } = useAccount();
  return (
    <>
      <div>
        {/* <ConnectKitButton /> */}
        <div>Connected Wallet: {isConnected ? address : "Conect First"}</div>
      </div>
    </>
  );
}

export default App;
