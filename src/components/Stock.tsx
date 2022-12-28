import { useEffect, useRef } from "react";

export function Stock({ name, value }: { name: string; value: number }) {
  const prevCountRef = useRef(0);

  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current = value;
  }, [value]); //run this code when the value of count changes

  return (
    <div className="Stock">
      <div className="text-small">
        {prevCountRef.current < value ? (
          <span style={{ color: "green" }}>&#8593;</span>
        ) : (
          <span style={{ color: "red" }}>&#8595;</span>
        )}
      </div>
      <div className="text-small">{name}</div>
      <div className="Value">{value}</div>
    </div>
  );
}
