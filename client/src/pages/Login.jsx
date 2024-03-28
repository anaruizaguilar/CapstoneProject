import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Fake_Store_API";
import { fetchAllUsers } from "../Fake_Store_API";

function Login({ setToken }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        const data = await login(username, password);
        console.log(data.token);
        if(data) {
            localStorage.setItem('token', data.token);
            setToken(data.token);
            const allUsers = await fetchAllUsers();
            const id = allUsers.find((customer) => username === customer.username)
            console.log(id);
            navigate(`/account/${id.id}`);
        }
    }

    return(
    <>
        <div className="login-form">
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username: {""} <input value={username} onChange={(e) => {setUsername(e.target.value);}} />
                </label>
                <label>
                    Password: {""} <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => {setPassword(e.target.value);}}/>
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    </>
    )
}

export default Login;