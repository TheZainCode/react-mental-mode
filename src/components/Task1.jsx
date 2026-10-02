function Task1(){
    const name= "Zain";
    const role= "Frontend Developer";
    const experience= "2+ years";
    const isAvailable=true;
    const skills=["HTML","CSS","JavaScript"];
    return(
        <section>
            <h1>Name: {name}</h1>
            <h2>Role: {role}</h2>
            <p>Experience: {experience}</p>
            <p>{isAvailable ? "Available" : "Not Available"}</p>
            <p>{skills.join(", ")}</p>
        </section>
    )
}
export default Task1;