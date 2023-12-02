import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { webSocketPublicClient, publicClient, chains } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: import.meta.env.VITE_APP_Alchemy })]
);
const config = createConfig(
  getDefaultConfig({
    publicClient,
    webSocketPublicClient,
    chains,
    appName: "ConnectKit",
    walletConnectProjectId: import.meta.env.VITE_Wallet_Id,
    autoConnect: true,
  })
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
