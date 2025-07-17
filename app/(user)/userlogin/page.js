const UserLogin = () => {
    return (
        <div className="loginpage">
            <form className="user-login-form">
                <p className="user-head">User Login</p>
                <div className="form-content">
                <div className="name">
                    <label>Name</label><br/>
                    <input type="text" className="rounded borderless outline" placeholder="Enter your Name" required />
                </div>
                <br />
                
                <div>
                    <label>Email</label><br/>
                    <input type="email" className="rounded borderless outline" placeholder="Enter your Email" required />
                </div>
                <br />
                <div className="pass">
                    <label>Password</label><br/>
                    <input type="password" className="rounded borderless outline" placeholder="Enter your Password" required />
                </div>
                <br />
                <button className="submit rounded borderless">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;
