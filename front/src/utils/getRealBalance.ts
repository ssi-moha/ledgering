import BigNumber from "bignumber.js";

function getRealBalance(decimals: string, rawBalance: string) {
  const balance = new BigNumber(rawBalance);
  const divider = new BigNumber(10).pow(decimals);

  return balance.dividedBy(divider).toString();
}

export default getRealBalance;
