import './App.css';
import Header from './components/Header';
import ShopingCart from './components/ShopingCart';
import { Provider } from "react-redux";
import ShoppingCartStor from './Utils/ShoppingCartStor';
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "./Utils/cartSlice";
import { itemData } from "./Utils/MockData";

function App() {

  return (
    <Provider store={ShoppingCartStor}>
      <div className="App">
        <Header />
        <ShopingCart />
      </div>
    </Provider>
  );
}

export default App;
