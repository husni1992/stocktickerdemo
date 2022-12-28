import { Stock } from "./Stock";
import "./StockContainer.css";

type StockType = {
  id: number;
  name: string;
  value: number;
};

export function StockContainer({ stocks }: { stocks: StockType[] }) {
  return (
    <div className="Container">
      {stocks.map((item) => (
        <Stock key={item.id} name={item.name} value={item.value} />
      ))}
    </div>
  );
}
