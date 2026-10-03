function UserCard({name,role,experience,isAvailable}){
    return(
        <article>
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>{experience}</p>
            <p>{isAvailable ? "Available" : "Not Available"}</p>
        </article>
    )
}
export default UserCard;