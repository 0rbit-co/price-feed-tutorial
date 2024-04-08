import { createDataItemSigner, message, result } from "@permaweb/aoconnect";

const getPrice = async () => {
    const msg = await message({
      process: "VxjJDgfj7-sXULTybk6mk0IZOhe7T0Y4pbxANJXnfEY",
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [
        { name: "Action", value: "Get-Price" },
        { name: "Token", value: "BTC" }
    ],
    });
let { Messages } = await result({
        message: msg,
        process: "VxjJDgfj7-sXULTybk6mk0IZOhe7T0Y4pbxANJXnfEY",
    });

    return Messages[0];
}

export default getPrice;