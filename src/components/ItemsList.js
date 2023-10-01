import React, { useEffect } from "react";
import Item from "./Item";
//import { useSelector } from "react-redux";
import { itemData } from "../Utils/MockData";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../Utils/cartSlice";

const ItemsList = () => {
  const  item  = useSelector((store) => store.cart.items);
  console.log("cart---", item[0].item);

  return (
    <div className="Items-List-Conatiner">
      <div className="item-List-Header">
        <input className="item-List-Header-right" type="text" />
        <div className="item-List-Header-left">
          <button>Add items</button>
          <div>🖨️</div>
        </div>
      </div>
      <div className="item-list-section">
        <div>Product name</div>
        <div>Brand</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Status</div>
      </div>
      {
       item[0]?.item.map((ite) => {
        console.log(ite);
        return <Item ite={ite} />;
      })}

      
    </div>
  );
};

export default ItemsList;
