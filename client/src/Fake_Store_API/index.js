import Home from "../pages/Home";

export async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        console.log(result)
        return result;
    } catch(err) {
        console.error('Trouble fetching products', err);
    }
}
export { Home };