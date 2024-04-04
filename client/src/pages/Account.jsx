
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Account({ token, user, cart }) {

    console.log(user);
    console.log(cart);
    console.log(token);
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
        return navigate('/login');
    })

    return(
        <div key={user.id}>
            <h2>Hello {user.username}</h2>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Account;