import { useState } from "react";

function RegisterForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError]=useState("");

    function handleChange(event){
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();

        setError("");
        if(!formData.name.trim()){
            setError("Please enter a valid name");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email.trim() || !emailRegex.test(formData.email)){
            setError("Please enter a valid email Address");
            return;
        }

        if(!formData.password || formData.password.length < 6){
            setError("Please enter a valid password");
            return;
        }

        console.log("Form Submitted Successfully", formData);
    } 

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
                
                <h3>Name: {formData.name}</h3>
                <p>Email: {formData.email}</p>
                {error && <p>{ error}</p>}
                <button type="submit">Register</button>
            </form>
        </>
    );
} 

export default RegisterForm;