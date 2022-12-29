import { useEffect, useRef } from "react";
import styles from "./Stock.module.css";

export function Stock({ name, value }: { name: string; value: number }) {
  const prevCountRef = useRef(0);

  const isPriceUp = prevCountRef.current < value;

  useEffect(() => {
    prevCountRef.current = value;
  }, [value]);

  return (
    <div className={styles.container}>
      <div className={styles["text-medium"]}>
        {isPriceUp ? (
          <span style={{ color: "green" }}>&#8593;</span>
        ) : (
          <span style={{ color: "red" }}>&#8595;</span>
        )}
      </div>
      <div className={styles["text-medium"]}>{name}</div>
      <div style={{ color: isPriceUp ? "green" : "red" }}>{value}</div>
    </div>
  );
}
