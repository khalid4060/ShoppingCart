import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const PopUp = ({ ite,text, name, closePopup }) => {
  let itemm = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleYes = () => {
    closePopup();
     let newdata = structuredClone(itemm);
     console.log("newdata------", itemm.length);

     itemm[0].item.map((i, index) => {
       console.log(i, index);
       if (i.name === ite.name) {
         newdata[0].item[index].status = "Missing";
         console.log("newdata", newdata[0].item);
         dispatch(addItem(newdata));
       }
       return null;
     });
  };
  const handleNo = () => {
    closePopup();
     let newdata = structuredClone(itemm);
     console.log("newdata------", itemm.length);

     itemm[0].item.map((i, index) => {
       console.log(i, index);
       if (i.name === ite.name) {
         newdata[0].item[index].status = "MissingUrgent";
         console.log("newdata", newdata[0].item);
         dispatch(addItem(newdata));
       }
       return null;
     });
  };
  return (
    <div className="popup-container">
      <div className="popup-body">
        <div className="pop-up-Header">
          <h3>{text}</h3>
          <button onClick={closePopup}>X</button>
        </div>

        <h4>{name}</h4>
        <div className="popUp-btn">
          <button
            onClick={() => {
              handleYes();
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              handleNo();
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
