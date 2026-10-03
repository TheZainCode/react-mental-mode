import { useState } from "react"
function Profile(){
    const [profile, setProfile]=useState({
        name: "Zain",
        role: "Frontend Developer",
        experience : 2
    })
    function handleChangeRole(){
        setProfile(preProfile =>({
            ...preProfile,
            role: "React Developer"
        }))
    }
    function handleAddExperience(){
        setProfile(preExp => ({
            ...preExp,
            experience: preExp.experience + 1
        }))
    }
    const {name, role, experience}=profile;
    return(
        <article>
            <h2>Name: {name}</h2>
            <h3>Role: {role}</h3>
            <p>Experience: {experience} years</p>
            <button onClick={handleChangeRole}>Change Role</button>
            <button onClick={handleAddExperience}>Add Experience</button>
        </article>
    )
}
export default Profile;