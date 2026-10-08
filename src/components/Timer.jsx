import { useState , useEffect } from "react";
function Timer(){
    const [count, setCount]=useState(0);
    useEffect(() => {
        const timer=setInterval(()=>{
            setCount(prevCount => prevCount +1);
        },1000);
        return () =>{
            clearInterval(timer);
        }
    },[]);
    return(
        <p>Count: {count}</p>
    )
}
export default Timer;