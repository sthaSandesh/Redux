import { useSelector } from "react-redux";

export const JacketView = () => {
  const numOfJacket = useSelector((state) => state.jacket.numOfJacket);
  return (
    <div>
      <h1>Number of Jacket-{numOfJacket}</h1>
      <button>Order Jacket</button>
      <button>Restock Jacket</button>
    </div>
  );
};
