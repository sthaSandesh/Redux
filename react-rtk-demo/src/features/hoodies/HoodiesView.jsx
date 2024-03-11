import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./hoodies";
import { useState } from "react";
export const HoodiesView = () => {
  const [count, setCount] = useState(1);
  const numOfHoodies = useSelector((state) => state.hoodies.numOfHoodies);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Hoodies - {numOfHoodies}</h1>
      <button onClick={() => dispatch(ordered())}>Order Hoodies</button>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      />
      <button onClick={() => dispatch(restocked(count))}>Restock Cake</button>
    </div>
  );
};
