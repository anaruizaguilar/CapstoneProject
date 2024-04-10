import CartItemCard from "./CartItemCard";
import { useNavigate } from 'react-router-dom'
import { addCartItem, removeCartItem, editCartItemQuantity } from "../Fake_Store_API";
import { useEffect, useState } from "react";

function Cart({ user, cart, products, setCart }) {
    // console.log(products);
    // console.log(user);
    console.log(cart);
    const navigate = useNavigate();
    const [subTotal, setSubTotal] = useState(0);

    const cartItemDetails = (cartItem) => 
    products.find((product) => product.id === cartItem.productId);

    const handleIncrement = (id) => {
        setCart((prevCart) => addCartItem(prevCart, id));
    };

    const handleDecrement = (id) => {
        setCart((prevCart) => removeCartItem(prevCart, id));
    }

    const handleEdit =(id, newQuantity) => {
        setCart((prevCart) => editCartItemQuantity(prevCart, id, newQuantity));
    }

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const getTotalCart = () => {
            return cart.reduce((total, item) => {
                const product = products.find((product) => product.id === item.productId);
                if (product) {
                    return total + product.price * item.quantity;
                } 
                return total;
            }, 0); 
        };
        const total = getTotalCart();
        setSubTotal(total);
    }, [cart, products])

    const handleCheckout = () => {
        navigate('/checkout');
    }

    return(
        <div>
            <h1>Cart</h1>
            <p>Total Items: {totalItems} </p>
            {cart.map((item) => {
                const productItem = cartItemDetails(item);
                // console.log("product item", productItem)
                return (
                    <CartItemCard key={item.productId} cartItem={productItem} quantity={item.quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} onEdit={handleEdit}/>
                )
            })}
            <p>Subtotal: {isNaN(subTotal) ? "$0.00" : `$${subTotal.toFixed(2)}`}</p>
            <div className="checkout-button-container">
                <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;