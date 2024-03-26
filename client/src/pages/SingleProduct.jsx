import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../Fake_Store_API";


function SingleProduct() {

    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function singleProductView() {
            try {
                const selectedProduct = await fetchSingleProduct(id);
                setProduct(selectedProduct);
            } catch(error) {
                console.error(error);
            }
        }
        singleProductView();
    }, [])

    return(
        <div key={id} className="single-product-view">
            <h1>{product.title}</h1>
            <img src={product.image} className="single-product-image" />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button className="SP-return-button" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
    )
}

export default SingleProduct;