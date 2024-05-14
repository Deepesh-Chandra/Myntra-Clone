import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagSlice = useSelector((store) => store.bag);
  console.log(bagSlice);
  const itemFoundInBag = bagSlice.indexOf(item.id) >= 0;

  console.log(item.id);
  console.log(itemFoundInBag);

  const handleAddToBag = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagSliceActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {itemFoundInBag ? (
        <button
          type="button"
          class="btn btn-add-bag btn-danger"
          onClick={handleRemoveFromBag}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-add-bag btn-success "
          onClick={handleAddToBag}
        >
          Add To Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;