import { Stock } from "./Stock";
import styles from "./StockContainer.module.css";

type StockType = {
  id: number;
  name: string;
  value: number;
};

export function StockContainer({ stocks }: { stocks: StockType[] }) {
  return (
    <div className={styles.container}>
      {stocks.map((item) => (
        <Stock key={item.id} name={item.name} value={item.value} />
      ))}
    </div>
  );
}
