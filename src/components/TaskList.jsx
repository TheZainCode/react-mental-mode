import { useState } from "react";
function TaskList(){
    const [tasks, setTasks]=useState([
        {
            id: 1,
            title: "Learn JSX",
            completed: true
        },
        {
            id: 2,
            title: "Learn Props",
            completed: false
        },
        {
            id: 3,
            title: "Learn State",
            completed: false
        }
    ])
    function handleToggleProps(){
        setTasks((preTasks) => 
            preTasks.map((task) => 
                task.id===2 ? {...task, completed : !task.completed} : task
            )
        );
    }
    function handleDeleteJSX(){
        setTasks((pre) => 
            pre.filter((task) => task.id !== 1));
    }
    function handleAddReactRouter(){
        setTasks((prev) => [
            ...prev,
            {
                id: 4,
                title: "Learn React Router",
                completed: false
            }
        ]);
    }
    return(
        <section>
            <h2>Task List</h2>
        {tasks.map((task) => (
            <article key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.completed ? "Completed" : "Pending"}</p>
            </article>
        ))}
        <div>
            <button onClick={handleToggleProps}>Toggle Props</button>
            <button onClick={handleDeleteJSX}>Delete JSX</button>
            <button onClick={handleAddReactRouter}>Add React Router</button>
        </div>
        </section>
    );
}
export default TaskList;