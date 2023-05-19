require("hardhat-celo");

module.exports = {
  networks: {
    celo: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: ["your-private-key"]
    }
  },
  solidity: "0.8.0",
};
