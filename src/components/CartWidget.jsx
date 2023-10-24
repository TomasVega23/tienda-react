import CartIcon from "./CartIcon"
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const {cartTotal} = useContext(CartContext);
  return (cartTotal() > 0) ?
    <Link to={"/cart"} type="button" className="btn btn-secondary position-relative">
      <CartIcon  />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartTotal()}</span>
    </Link> : "";
  
}
export default CartWidget;
