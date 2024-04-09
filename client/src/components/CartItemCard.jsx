import { addCartItem } from "../Fake_Store_API";

function CartItemCard({ cartItem, quantity, onIncrement, onDecrement, onEdit }) {
    console.log("cart item", cartItem);

    const handleIncrement =() => {
        onIncrement(cartItem.id);
    }

    const handleDecrement =() => {
        onDecrement(cartItem.id);
    }

    const handleQuantityChange = (event) => {
        const newQuantity = Number(event.target.value)
        onEdit(cartItem.id, newQuantity)
    }

    return (
        <div className="cart-item-card">
            <div>
                <h3>{cartItem?.title}</h3>
                <img src={cartItem?.image} className="cart-item-img"/>
                <div className="cart-item-details">
                <p>Price: {cartItem?.price}</p>
                <p>Quantity:{quantity}</p>
                <select value={quantity} onChange={handleQuantityChange}>
                    {[...Array(30).keys()].map((index) => (
                        <option key={index} value={index +1}>
                            {index + 1}
                        </option>
                    ))}
                </select>
                <button className="quantity-button" onClick={handleIncrement}>+</button>
                <button className="quantity-button" onClick={handleDecrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;