const { ContractKit } = require("@celo/contractkit");

function getCeloKit() {
  const kit = ContractKit.newKit("https://alfajores-forno.celo-testnet.org");
  return kit;
}

module.exports = getCeloKit;
