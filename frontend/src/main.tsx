import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ArweaveWalletKit } from "arweave-wallet-kit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ArweaveWalletKit
      config={{
        permissions: ["SIGN_TRANSACTION"],
        ensurePermissions: true,
      }}
    >
      <App />
    </ArweaveWalletKit>
  </React.StrictMode>
);
