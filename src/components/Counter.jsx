import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        setCount(count-1);
    }
    function handleReset(){
        setCount(0)
    }
    return(
        <section>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>-</button>
        </section>
    )
}
export default Counter;