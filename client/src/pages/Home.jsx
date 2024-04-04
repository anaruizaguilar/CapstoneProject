import { fetchProducts } from "../Fake_Store_API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({products, cart, setCart }) {

    console.log(cart);

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     async function getProducts() {
    //         try{
    //         const allProducts = await fetchProducts();
    //         setProducts(allProducts);
    //         } catch(err) {
    //             console.error(error);
    //         }
    //     }
    //     getProducts();
    // }, [])

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

    return(
        <div className="display-products">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="products-list">
                            <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
                            <img src={product.image} className="home-pics"/>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                            <button className="add-to-cart-homepage" onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;