import { useState, useEffect } from "react";
function PersistentName(){
    const [name, setName]=useState(()=>{
        return localStorage.getItem("name") || "";
    });
    useEffect(()=>{
        localStorage.setItem("name",name)
    },[name]);
    function handleName(event){
        setName(event.target.value)
    }
    return(
    <section>
        <input type="text" value={name} onChange={handleName} placeholder="Enter Your Name" />
        <h3>Hello, {name}</h3>
    </section>
    )
}
export default PersistentName;