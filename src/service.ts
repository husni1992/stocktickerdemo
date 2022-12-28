import { STOCKS } from "./App";

function getRandomFloat(min: number, max: number, decimals: number) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

export function getStockPrices() {
  return STOCKS.map((s) => ({ ...s, value: getRandomFloat(10, 100, 4) }));
}
