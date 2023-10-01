import React from "react";
import { itemData } from "../Utils/MockData";
import { useEffect } from "react";
import ItemsList from "./ItemsList";
import { useDispatch, useSelector } from "react-redux";
import { addItem} from "../Utils/cartSlice";

const ShopingCart = () => {
  const dispatch = useDispatch();

  const suplier = useSelector((store) => store.cart.items);
  if (suplier[0]) {
    let total = suplier[0].item.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);
    console.log("totallllll", total);
  }

  //console.log("---------",suplier)

  useEffect(() => {
    dispatch(addItem(itemData));
  }, []);

  const handleaprove = () => {
    let newdata = structuredClone(suplier);

    newdata[0].StatusOrder = "Approved"
    newdata[0].item.map((i,index) => {
   if( newdata[0].item[index].status==="")   newdata[0].item[index].status = "Approved";
      
    })

    dispatch(addItem(newdata))
  }
  return (
    <div className="Shopping-cart">
      <div className="Cart-Header">
        <div className="Cart-Header-left">
          <div>Order 3213CS</div>
        </div>
        <div className="Cart-Header-right">
          <button className="Cart-Header-btn1">Back</button>
          <button className="Cart-Header-btn2" onClick={()=> {
            handleaprove()
          }} >{ suplier[0] ? suplier[0].StatusOrder:""}</button>
        </div>
      </div>
      <div className="Cart-Grid">
        <div className="Cart-Grid-child">
          <div className="Cart-Grid-Child-Heading">Suppiler</div>
          <div className="Cart-Grid-Child-Text">
            {suplier[0] ? suplier[0].suplier : "demo"}
          </div>
        </div>

        <div className="Cart-Grid-child">
          <div className="Cart-Grid-Child-Heading"> Shopping date</div>
          <div className="Cart-Grid-Child-Text">
            {new Date().toDateString()}
          </div>
        </div>
        <div className="Cart-Grid-child">
          <div className="Cart-Grid-Child-Heading"> Total </div>
          <div className="Cart-Grid-Child-Text">
            {suplier[0]
              ? suplier[0].item.reduce((acc, curr) => {
                  acc += curr.price * curr.quantity;
                  return acc;
                }, 0)
              : ""}$
          </div>
        </div>
        <div className="Cart-Grid-child">
          <div className="Cart-Grid-Child-Heading"> Catagory</div>
          <div className="Cart-Grid-Child-Text">🍇 🍈 🍞 🥦</div>
        </div>
        <div className="Cart-Grid-child">
          <div className="Cart-Grid-Child-Heading"> Department</div>
          <div className="Cart-Grid-Child-Text">
            {suplier[0] ? suplier[0].Department : ""}
          </div>
        </div>
        <div className="Cart-Grid-child">
          <div className="Cart-Grid-Child-Heading"> Status</div>
          <div className="Cart-Grid-Child-Text">
            {suplier[0] ? suplier[0].StatusOrder : ""}
          </div>
        </div>
      </div>
      {suplier[0] && <ItemsList />}
    </div>
  );
};

export default ShopingCart;
