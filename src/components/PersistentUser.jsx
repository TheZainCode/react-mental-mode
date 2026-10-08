import { useState, useEffect } from "react";
function PersistentUser(){
    const [user, setUser]=useState(()=>{
        const savedUser=localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : {name:"", role:""}
    });
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(user));
    },[user]);
    function handleChange(event){
        const {name, value}=event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]:value
        }));
    }
    return(
        <section>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter Your Name" />
            <input type="text" name="role" value={user.role} onChange={handleChange} placeholder="Enter Your Role" />
            <div>
                <h3>Name: {user.name}</h3>
                <h3>Role: {user.role}</h3>
            </div>
        </section>
    )
}
export default PersistentUser;