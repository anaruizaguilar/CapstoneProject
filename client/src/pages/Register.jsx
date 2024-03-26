import { useState } from "react";
import { register } from "../Fake_Store_API";
import { useNavigate } from "react-router-dom";

function Register() {

    const [email, setEmail] = useState("");
    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    const [ error, setError] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = await register(email, username, password);
        console.log(data);
        navigate('/');
    }

    return(
        <>
            <h2>Register</h2>
            {error && <p>{error}</p>}
            <form className="register-form" onSubmit={handleSubmit}>
                <label>
                    Email: {""} <input value={email} onChange={(e) => {setEmail(e.target.value);}}/>
                </label>
                <label>
                    Username: {""} <input value={username} onChange={(e) => {setUsername(e.target.value);}} />
                </label>
                <label>
                    Password: {""} <input value={password} onChange={(e) => {setPassword(e.target.value);}} />
                </label>
                <button type="register-submit-button">Submit</button>
            </form>
        </>
    );
}

export default Register;