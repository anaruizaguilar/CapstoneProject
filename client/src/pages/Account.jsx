
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Account({ token, setToken, user, cart }) {

    // console.log(user);
    // console.log(cart);
    // console.log(token);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            return navigate('/login');
        }
    }, [token])


    const logOut = (() => {
        localStorage.removeItem('token', token);
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        setToken(null);
        return navigate('/login');
    })

    const handleViewCart = () => {
        navigate('/cart');
    }

    return(
        <div key={user.id}>
            <h2>Hello {user.username}</h2>
            <p>Ready to checkout?</p>
            <button onClick={handleViewCart}>View Cart</button>
            <div>
            <button className="log-out-button" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}

export default Account;