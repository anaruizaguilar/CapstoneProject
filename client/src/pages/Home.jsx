

import ProductDetails from "../components/ProductDetails";

function Home({products, cart, setCart }) {


    return(
        <div className="display-products">
            {
                products.map((product) => {
                    return <ProductDetails key={product.id} product={product} cart={cart} setCart={setCart}/>
                })
            }
        </div>
    )
}

export default Home;