import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    function handleIncrement(){
        setCount(prevCount=>prevCount+1);
    }
    function handleDecrement(){
        setCount(prevCount=>prevCount-1);
    }
    function handleReset(){
        setCount(0)
    }
    function handleAddingFive(){
        setCount(prevCount=>prevCount+5);
    }
    return(
        <section>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleAddingFive}>+5</button>
        </section>
    )
}
export default Counter;