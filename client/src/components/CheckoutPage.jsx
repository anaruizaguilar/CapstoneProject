import { useState } from "react";
import Cart from "./Cart";

function CheckoutPage() {
    
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        shippingAddress: "",
        billingAddress: "",
        creditCardNumber: "",
        nameOnCard: "",
        expirationDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return(
        <>
            <h2>Checkout</h2>
            {error && <p>{error}</p>}
            <form className="checkout-form">
                <label>
                    Firstname: {""} <input value={formData.firstname} onChange={handleChange}/>
                </label>
                <label>
                    Lastname: {""} <input value={formData.lastname} onChange={handleChange} />
                </label>
                <label>
                   Shipping Address: {""} <input value={formData.shippingAddress} onChange={handleChange}/>
                </label>
                <label>
                    Billing Address: {""} <input value={formData.billingAddress} onChange={handleChange}/>
                </label>
                <label>
                    Credit Card Number: {""} <input value={formData.creditCardNumber} onChange={handleChange}/>
                </label>
                <label>
                    Name On Card: {""} <input value={formData.nameOnCard} onChange={handleChange}/>
                </label>
                <label>
                    Expiration Date: {""} <input value={formData.expirationDate} onChange={handleChange}/>
                </label>
                <button type="checkout-submit-button" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    );
}

export default CheckoutPage;