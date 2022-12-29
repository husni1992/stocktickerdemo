import logo from "./logo.svg";
import "./App.css";
import { StockContainer } from "./Stock/StockContainer";
import { useEffect, useState } from "react";
import { getStockPrices } from "./service";

export const STOCKS = [
  {
    id: 0,
    name: "Jamnation",
    value: 70.5013,
  },
  {
    id: 1,
    name: "Pyramia",
    value: 44.5593,
  },
  {
    id: 2,
    name: "Songbird",
    value: 84.0831,
  },
  {
    id: 3,
    name: "Tubesys",
    value: 83.1206,
  },
  {
    id: 4,
    name: "Cujo",
    value: 78.4075,
  },
  {
    id: 5,
    name: "Katakana",
    value: 58.9537,
  },
  {
    id: 6,
    name: "Flexigen",
    value: 72.6251,
  },
  {
    id: 7,
    name: "Lumbrex",
    value: 64.9555,
  },
  {
    id: 8,
    name: "Callflex",
    value: 32.236,
  },
  {
    id: 9,
    name: "Comtrek",
    value: 62.1884,
  },
  {
    id: 10,
    name: "Paragonia",
    value: 42.7658,
  },
  {
    id: 11,
    name: "Ultrimax",
    value: 35.0494,
  },
  {
    id: 12,
    name: "Isopop",
    value: 28.8918,
  },
  {
    id: 13,
    name: "Magnafone",
    value: 25.0414,
  },
  {
    id: 14,
    name: "Egypto",
    value: 62.281,
  },
];

function App() {
  const [stocks, setStocks] = useState(STOCKS);

  useEffect(() => {
    setInterval(() => {
      const latestStockPrices = getStockPrices();
      setStocks(latestStockPrices);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Live Stock Prices</h2>
        <img src={logo} className="App-logo" alt="logo" />

        <StockContainer stocks={stocks} />
      </header>
    </div>
  );
}

export default App;
