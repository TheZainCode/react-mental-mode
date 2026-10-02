function UserStatus(){
    const isLoggedIn=true;
    const isAdmin=false;
    const hasNotifications=true;
    return(
        <section>
            {isLoggedIn ?(
                <>
                <h1>Welcome back, Zain</h1>
                <button>Logout</button>
                </>
            ):
            <>
            <h1>Please Log in</h1>
            <button>Login</button>
            </>
            }
           {isAdmin && <p>Admin Panel Available</p>}
          {hasNotifications && <p>You have a new notification</p>}
        </section>
    )
}
export default UserStatus;