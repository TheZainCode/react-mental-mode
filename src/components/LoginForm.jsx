import { useState } from "react";
function LoginForm(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    return(
        <form>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter Your Email"/>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Your Password" />
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </form>
    )
}
export default LoginForm;