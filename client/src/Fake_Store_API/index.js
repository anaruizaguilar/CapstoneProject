import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Account from "../pages/Account";

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

export async function fetchAllUsers() {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const result = await response.json();
        console.log(result);
        return result;
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
        console.log(result)
        return result;
    } catch(err) {
        console.error('Trouble fetching user', err);
    }
}

export { Home, SingleProduct, Register, Login, Account };