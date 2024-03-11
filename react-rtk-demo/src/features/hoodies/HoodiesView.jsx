import { useSelector } from "react-redux";

export const HoodiesView = () => {
  const numOfHoodies = useSelector((state) => state.hoodies.numOfHoodies);
  return (
    <div>
      <h1>Number of Hoodies - {numOfHoodies}</h1>
      <button>Order Hoodies</button>
      <button>Restock Cake</button>
    </div>
  );
};
