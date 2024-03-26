import { fetchProducts } from "../Fake_Store_API";
import { useState, useEffect } from "react";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try{
            const allProducts = await fetchProducts();
            setProducts(allProducts);
            } catch(err) {
                console.error(error);
            }
        }
        getProducts();
    }, [])

    return(
        <div className="display-products">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="products-list">
                            <h2>{product.title}</h2>
                            <img src={product.image} className="home-pics"/>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;