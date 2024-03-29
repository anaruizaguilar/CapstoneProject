import { fetchProducts } from "../Fake_Store_API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({products}) {

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
                            <button className="add-to-cart-homepage">Add To Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;