
import { Link } from "react-router-dom";

function ProductDetails({ product, cart, setCart}) {


    const handleAddToCart = () => {
        const productId = product.id;
        const existingCartItemIndex = cart.findIndex((item) => item.productId === productId);
        if(existingCartItemIndex !== -1) {
            const updatedCart = {...cart};
            updatedCart[existingCartItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const newItem = {productId, quantity: 1};
            setCart((prevCart) => [...prevCart, newItem]);
        }
    }

    return (
        <div className="product-details-card">
                <div key={product.id} className="products-list">
                    <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
                    <img src={product.image} className="home-pics"/>
                    <p>{product.category}</p>
                    <p>${product.price}</p>
                     <button className="add-to-cart-homepage" onClick={handleAddToCart}>Add To Cart</button>
                </div>
        </div>
    )
}

export default ProductDetails;