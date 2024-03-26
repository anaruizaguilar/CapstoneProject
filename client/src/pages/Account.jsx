import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../Fake_Store_API";

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
                const response = await fetchUser(id);
                setUser(response);
            } catch(error) {
                console.error(error);
            }
        }
        userAccount();
    }, [])

    return(
        <div key={id}>
            <h2>Hello</h2>
        </div>
    )
}

export default Account;