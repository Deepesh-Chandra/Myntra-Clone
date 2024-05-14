import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagSlice = useSelector((store) => store.bag);
  const itemSlice = useSelector((store) => store.item);

  const finalItems = itemSlice.filter((item) => {
    const itemIndex = bagSlice.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
