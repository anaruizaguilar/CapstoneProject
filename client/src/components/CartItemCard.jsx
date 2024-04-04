

function CartItemCard({ cartItem, quantity }) {
    console.log("cart item", cartItem);
    return (
        <div className="cart-item-card">
            <div>
                <h3>{cartItem?.title}</h3>
                <img src={cartItem?.image} className="cart-item-img"/>
                <div className="cart-item-details">
                <p>Price: {cartItem?.price}</p>
                <p>Quantity:{quantity}</p>
                <button className="quantity-button">+</button>
                <button className="quantity-button">-</button>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;