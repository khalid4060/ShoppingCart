import React from 'react'
import { useSelector } from "react-redux";

const Header = () => {
    const [cartItems] = useSelector((store) => store.cart.items);
    console.log(cartItems)
  return (
    <div className="Header-main">
      <div className="Header-left">
        <div className="Header-logo">Reeco</div>
        <div>Store</div>
        <div>Order</div>
        <div>analytics</div>
      </div>
      <div className="Header-right">
        <div>
          {cartItems && 
            <span className="cart-sup">{cartItems.item.length}</span>
          }
          🛒
        </div>
        <div>Hello james</div>
      </div>
    </div>
  );
}

export default Header