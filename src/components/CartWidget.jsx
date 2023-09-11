import CartIcon from "./CartIcon"
import CartItems from "./CartItems"

const CartWidget = () => {
  return (
    <div  className="bg-secondary-subtle rounded-circle p-3 position-relative"
    style={{ cursor: "pointer" }}>
        <CartIcon  />
        <CartItems count={2} />
    </div>
  )
}

export default CartWidget