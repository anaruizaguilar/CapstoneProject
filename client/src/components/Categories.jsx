import { useParams } from 'react-router';
import { SingleProduct } from '../Fake_Store_API';
import ProductDetails from './ProductDetails';

function Categories({ products, setCart, cart}) {
    const {categoryItem} = useParams();
    const filteredCategories = products.map((product) => {
        if(product.category === categoryItem) {
            return <ProductDetails key={product.id} product={product} setCart={setCart} cart={cart}/>
        }
    })
    return (
        <div className='filtered-images'>{filteredCategories}</div>
    )
}

export default Categories;