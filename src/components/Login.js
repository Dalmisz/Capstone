import React from "react";

function Login() {
    return (
        <div className="login">
            <form className="login-form">
                <label htmlFor="user">Username</label>
                <input type="text" id="user" name="user" required />
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" name="pass" required />
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    )
}

export default Login;