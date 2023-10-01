import React, { useState } from "react";
import img from "../Utils/Apple Green Smith.png";
import PopUp from "./PopUp";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const Item = ({ ite }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  let itemm = useSelector((store) => store.cart.items);

  const handletick = () => {
    
    let newdata = structuredClone(itemm)
    console.log("newdata------", itemm.length);

    itemm[0].item.map((i, index) => {
      console.log(i, index);
      if (i.name === ite.name) {
        newdata[0].item[index].status="Approved"
        console.log("newdata", newdata[0].item);
        dispatch(addItem(newdata));
      }
      return null;
    });
  };
  const handlecross = () => {
    setOpen(true);
  };
  return (
    <div className="item-conatiner">
      <img className="item-img" src={img} alt="" />
      <span className="item-name">{ite.name}</span>
      <span className="item-name">{ite.Brand}</span>
      <span className="item-name">{ite.price}$ </span>
      <span className="item-name">{ite.quantity}</span>
      <span className="item-name">{ite.price * ite.quantity}$</span>
      <span className="item-select-btn">
        {ite.status === "Approved" && (
          <span className="item-approved">{ite.status}</span>
        )}
        {ite.status === "Missing" && (
          <span className="item-Missing">{ite.status}</span>
        )}
        {ite.status === "MissingUrgent" && (
          <span className="item-UrgentMissing">{ite.status}</span>
        )}
        {open ? (
          <PopUp
            ite={ite}
            text="Missing Product"
            name={ite.name}
            closePopup={() => setOpen(false)}
          />
        ) : null}
        <button
          onClick={() => {
           itemm[0].StatusOrder==="Awaiting aproval" && handletick();
          }}
        >
          ✔️
        </button>
        <button
          onClick={() => {
            itemm[0].StatusOrder === "Awaiting aproval" && handlecross();
          }}
        >
          ❌
        </button>
      </span>
    </div>
  );
};

export default Item;
