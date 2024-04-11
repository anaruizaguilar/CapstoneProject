import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function CheckoutPage() {
    
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expirationDate, setExpirationDate] = useState("");


async function handleSubmit(e) {
        e.preventDefault();
        console.log(firstname, lastname, shippingAddress, billingAddress, creditCardNumber, nameOnCard, expirationDate);
        setFirstname("");
        setLastname("");
        setShippingAddress("");
        setBillingAddress("");
        setCreditCardNumber("");
        setNameOnCard("");
        setExpirationDate("");
    }

    return(
        <>
            <h2>Checkout</h2>
            <form className="checkout-form">
                <label>
                    Firstname: {""} <input value={firstname} onChange={(e) => {setFirstname(e.target.value);}}/>
                </label>
                <label>
                    Lastname: {""} <input value={lastname} onChange={(e) => {setLastname(e.target.value);}} />
                </label>
                <label>
                   Shipping Address: {""} <input value={shippingAddress} onChange={(e) => {setShippingAddress(e.target.value);}}/>
                </label>
                <label>
                    Billing Address: {""} <input value={billingAddress} onChange={(e) => {setBillingAddress(e.target.value);}}/>
                </label>
                <label>
                    Credit Card Number: {""} <input value={creditCardNumber} onChange={(e) => {setCreditCardNumber(e.target.value);}}/>
                </label>
                <label>
                    Name On Card: {""} <input value={nameOnCard} onChange={(e) => {setNameOnCard(e.target.value);}}/>
                </label>
                <label>
                    Expiration Date: {""} <input value={expirationDate} onChange={(e) => {setExpirationDate(e.target.value);}}/>
                </label>
                <button type="checkout-submit-button" onClick={handleSubmit}>Submit</button>
                <button className="checkout-return-button" onClick={() => navigate('/')}>Continue Shopping</button>
            </form>
        </>
    );
}

export default CheckoutPage;