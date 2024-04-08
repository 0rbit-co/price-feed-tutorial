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
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          Getting Price Feed using{" "}
          <span className="text-yellow-500">0rbit</span> on{" "}
          <span className="text-yellow-500">AO</span>
        </h1>

        <div className="bg-black rounded-lg shadow-lg p-8 w-full max-w-md lg:max-w-lg border-white/40 border-2">
          <div className="mb-6">
            <ConnectButton
              accent="white"
              profileModal={true}
              showBalance={false}
              className="text-black"
            >
              Connect Wallet
            </ConnectButton>
          </div>
          <div className="mb-6">
            <button
              onClick={() => setPrice()}
              className="bg-white hover:bg-zinc-300 text-black font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full"
              disabled={loading}
            >
              {loading ? "Fetching Price..." : "Get Price"}
            </button>
          </div>
          {currentPrice && (
            <div className="bg-[#0F0F0F] text-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Current Bitcoin Price
              </h2>
              <div className="text-lg md:text-xl">
                <span className="text-yellow-400">$</span>
                {currentPrice}
              </div>
            </div>
          )}
        </div>
        <div className="pt-8"></div>
        <div className="flex flex-col justify-start border-white/40 border-2 p-8 bg-[#0F0F0F] rounded-lg">
          <h2 className="text-white pt-10">Useful Links:</h2>
          <div className="text-white grid grid-cols-2 gap-4 pt-4">
            <a href="https://docs.0rbit.co/" className="text-yellow-500">
              Documentation
            </a>
            <a
              href="https://github.com/0rbit-co/price-feed-tutorial"
              className="text-yellow-500"
            >
              GitHub Repository
            </a>
            <a href="https://mirror.xyz/" className="text-yellow-500">
              Frontend Blog
            </a>
            <a href="https://mirror.xyz/" className="text-yellow-500">
              Contract Blog
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm py-4">
        Made with 💛 by 0rbit
      </footer>
    </div>
  );
}

export default App;