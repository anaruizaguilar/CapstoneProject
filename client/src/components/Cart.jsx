import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import { useEffect } from "react";

function Cart({ user, cart, products, setCart }) {
    console.log(products);
    console.log(user);
    console.log(cart);
    const navigate = useNavigate();


    const cartItemDetails = (cartItem) => 
    products.find((product) => product.id === cartItem.productId);
    return(
    <>
        <div>
            <h1>Cart</h1>
            <p>Items: </p>
            {cart.map((item) => {
                const productItem = cartItemDetails(item);
                console.log("product item", productItem)
                return (
                    <CartItemCard key={productItem.id} cartItem={productItem} quantity={item.quantity}/>
                )
            })}
            <div className="checkout-button-container">
                <button className="checkout-button" onClick={navigate('/checkoutpage')}>Checkout</button>
            </div>
        </div>
    </>
    )
}

export default Cart;