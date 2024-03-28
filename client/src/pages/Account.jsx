import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../Fake_Store_API";
import { login } from "../Fake_Store_API";

function Account({ token }) {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            return navigate('/login');
        }

        async function userAccount() {
            try {
                const response = await fetchUser(token, id);
                console.log(response);
                setUser(response);
            } catch(error) {
                console.error(error);
            }
        }
        userAccount(id);
    }, [id])

    return(
        <div key={id}>
            <h2>Hello {user.username}</h2>
            <button onClick={console.log('click')}>Log Out</button>
        </div>
    )
}

export default Account;