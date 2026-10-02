function UserList(){
    const users=[
        {
            id: 1,
            name: "Ali",
            role: "Frontend Developer"
        },
        {
            id: 2,
            name: "Ahmad",
            role: "Backend Developer"
        },
        {
            id: 3,
            name: "Sara",
            role: "UI Designer"
        }
    ];
    return(
        <section>
            <h1>Our Team</h1>
            {users.map((user)=>(
                <article key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.role}</p>
                </article>
            ))}
        </section>
    )
}
export default UserList;