import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Account from "../pages/Account";
import Cart from "../components/Cart";

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

export async function fetchSingleProduct(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await response.json();
        console.log(result);
        return result;
    } catch(err) {
        console.error('Trouble fetching product', err);
    }
}

export async function register(email, username, password) {
    try{
        const response = await fetch('https://fakestoreapi.com/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password })
        })
        const result = await response.json();
        console.log(result);
        return result;
    } catch(error) {
        console.error(error);
    }
}

export async function login(username, password) {
    try {
        const response  = await fetch('https://fakestoreapi.com/auth/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        const result = await response.json();
        console.log(result);
        return result;
    } catch(err) {
        console.error('Trouble logging in', err);
    }
}

export async function fetchAllUsers(username) {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const result = await response.json();
        const userData = result.find((user) => user.username === username);
        console.log(userData);
        return userData;
    } catch(err) {
        console.error('Trouble fetching users', err);
    }
}

export async function fetchUser(token, id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        //console.log(result)
        return result;
    } catch(err) {
        console.error('Trouble fetching user', err);
    }
}

export async function fetchUserCart(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
        const result = await response.json();
        console.log(result);
        console.log(result.products);
        return result.products;
    } catch(err) {
        console.error('Trouble fetching user cart', err);
    }
}

export function addCartItem(cartItems, productId) {
    const existingCartItemIndex = cartItems.findIndex((item) => item.productId === productId);
    if(existingCartItemIndex !== -1) {
        const updatedCart = {...cartItems};
        updatedCart[existingCartItemIndex].quantity += 1;
        return updatedCart;
    } else {
        const newItem = {productId, quantity: 1};
       return [...cartItems, newItem];
    }
}

export function removeCartItem(cartItems, productId) {
    const exixtingCartItemIndex = cartItems.findIndex((cartItem) => cartItem.productId === productId);
    if(exixtingCartItemIndex !== -1 && cartItems[exixtingCartItemIndex].quantity > 1) {
        const updatedCart = cartItems.map((item) => {
            if(item.productId === productId) {
                return {...item, quantity: item.quantity - 1};
            } else {
                return item;
            }
        })
        return updatedCart;
    } else if(
        exixtingCartItemIndex !== -1 && cartItems[exixtingCartItemIndex].quantity === 1
    ) {
        const updateCart = cartItems.filter((item) => {
            return item.productId !== productId;
        })
        return updateCart;
    } else {
        return;
    }
}

export const editCartItemQuantity = (cartItems, productId, newQuantity) => {
    const existingCartItemIndex = cartItems.findIndex((item) => {
        return item.productId === productId;
    })
    if(existingCartItemIndex !== -1) {
        const updateCart = [...cartItems];
        updateCart[existingCartItemIndex].quantity = newQuantity;
        return updateCart;
    } else {
        return cartItems;
    }
}

export { Home, SingleProduct, Register, Login, Account, Cart };