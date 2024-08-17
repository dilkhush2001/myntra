import { useDispatch, useSelector } from "react-redux";

import { wishListActions } from "../routes/wishlistSlice";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ item }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((store) => store.wishlist);
  const elementFound = wishlistItems.indexOf(item.id) >= 0;

  const addtowishlist = () => {
    dispatch(wishListActions.addToWishlist(item.id));
  };
  const removefromwishlist = () => {
    dispatch(wishListActions.removeFromWishlist(item.id));
  };

  return (
    <>
      <div className="item-container">
        <Link to={`/singlePage/${item.item_name}`} item={item} state={{ item }}>
          <img className="item-image" src={item.image} alt="item image" />
        </Link>

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
        {!elementFound ? (
          <button
            type="button"
            className="btn btn-add-bag btn-success"
            onClick={addtowishlist}
          >
            Wishlist
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-add-bag btn-danger"
            onClick={removefromwishlist}
          >
            Remove
          </button>
        )}
      </div>
    </>
  );
};
export default HomePage;
