import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./jacket";
import { useState } from "react";

export const JacketView = () => {
  const [count, setCount] = useState(1);
  const numOfJacket = useAppSelector((state) => state.jacket.numOfJacket);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Number of Jacket-{numOfJacket}</h1>

      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Jacket
      </button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(restocked(count));
        }}
      >
        Restock Jacket
      </button>
    </div>
  );
};
