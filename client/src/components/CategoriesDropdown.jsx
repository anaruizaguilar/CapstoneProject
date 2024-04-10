import { useState } from "react";
import { useNavigate } from "react-router";


function CategoriesDropdown() {

    const [selectedOpttion, setSelectedOption] = useState("");
    const navigate = useNavigate();
    const options = [
        "All products",
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        if(event.target.value === "All products") {
            navigate("/");
        } else {
            navigate(`/categories/${event.target.value}`);
        }
    };

    
    return (
        <div className="dropdown-container">
            <label htmlFor="category" className="label">
                Choose a category:
            </label>
            <select value={selectedOpttion} onChange={handleChange} className="select" id="category">
                {options.map((option, index) => {
                    return <option key={index} value={option} className="option">
                        {option}
                    </option>
                })}
            </select>
            <p>Selected Category: {selectedOpttion}</p>
        </div>
    )
}

export default CategoriesDropdown;