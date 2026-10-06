import { useState } from "react";
function RegisterForm(){
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        password: ""
    });
    function handleChange(event){
        const {name, value}=event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }));
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
            <h3>Name: {formData.name}</h3>
            <p>Email: {formData.email}</p>
            <p>Password: {"*".repeat(formData.password.length)}</p>
            <button type="submit">Register</button>
           </form>
        </>
    )
}
export default RegisterForm;