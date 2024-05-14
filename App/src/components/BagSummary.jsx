import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {

  const bagItemIds=useSelector(state=>state.bag);
  const itemSlice = useSelector((store) => store.item);

  const finalItems = itemSlice.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVINIENCE_FEES=99;
  let totalItem=bagItemIds.length;
  let totalMRP=0;
  let totalDiscount=0;

  finalItems.forEach((bagItems)=>{
    totalMRP+=bagItems.original_price;
    totalDiscount+=bagItems.original_price-bagItems.current_price;
  })

  let finalPayment=totalMRP-totalDiscount+CONVINIENCE_FEES;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
