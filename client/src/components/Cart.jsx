import CartItemCard from "./CartItemCard";

import { addCartItem, removeCartItem, editCartItemQuantity } from "../Fake_Store_API";

function Cart({ user, cart, products, setCart }) {
    // console.log(products);
    // console.log(user);
    console.log(cart);
   


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

    return(
    <>
        <div>
            <h1>Cart</h1>
            <p>Total Items: {totalItems} </p>
            {cart.map((item) => {
                const productItem = cartItemDetails(item);
                console.log("product item", productItem)
                return (
                    <CartItemCard key={item.productId} cartItem={productItem} quantity={item.quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} onEdit={handleEdit}/>
                )
            })}
            <div className="checkout-button-container">
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    </>
    )
}

export default Cart;