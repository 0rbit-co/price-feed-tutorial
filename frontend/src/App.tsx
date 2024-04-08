import { useState } from "react";
import { useConnection, ConnectButton } from "arweave-wallet-kit";
import getPrice from "./utils/getPrice";

function App() {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const { connected } = useConnection();

  async function setPrice() {
    if (!connected) {
      alert("Connect your wallet to fetch the Price");
      return;
    }

    setLoading(true);
    const price = await getPrice();
    setCurrentPrice(price.Data);
    setLoading(false);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white flex flex-col justify-center items-center border border-gray-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Crypto Price Checker</h1>
        <div className="mb-4">
          <ConnectButton profileModal={true} showBalance={false}>
            Connect Wallet
          </ConnectButton>
        </div>
        <div className="mb-4">
          <button
            onClick={() => setPrice()}
            className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Fetching Price..." : "Get Price"}
          </button>
        </div>
        {currentPrice && (
          <div className="text-lg">Current Bitcoin Price: {currentPrice}</div>
        )}
      </div>
    </div>
  );
}

export default App;
