function ActionButtons(){
    function handleSave(){
        console.log("Saved");
    }
    function handleDelete(){
        console.log("Deleted");
    }
    function handleReset(){
        console.log("Reset");
    }
    return(
        <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default ActionButtons;