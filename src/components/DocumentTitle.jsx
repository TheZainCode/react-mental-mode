import { useState, useEffect } from "react";
function DocumentTitle(){
    const [count, setCount]=useState(0);
    useEffect(() => {
        document.title= `Count: ${count}`
    },[count]);
    function handleIncrement(){
        setCount((prevCount) => (
            prevCount + 1
        ))
    }
    function handleReset(){
        setCount(0)
    }
    return(
        <section>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    )
}
export default DocumentTitle;