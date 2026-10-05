function CounterControls({onIncrease, onDecrease, onReset}){
    return(
        <>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onReset}>Reset</button>
        </>
    )
}
export default CounterControls;