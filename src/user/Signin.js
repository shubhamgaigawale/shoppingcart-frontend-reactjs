import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect, withRouter } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper"

const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loding: false,
        didRedirect: false
    });

    const { email, password, error, loding, didRedirect } = values
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loding: true })
        signin({ email, password })
            .then(
                data => {
                    if (data.error) {
                        setValues({ ...values, error: data.error, loding: false })
                    } else {
                        authenticate(data, () => {
                            setValues({ ...values, name: "", email: "", password: "", error: "", success: true })
                        })
                    }
                }
            )
            .catch(
                console.log("Signin request failed")
            )
    }

    const performRedirect = () => {

        //TODO
        if (didRedirect) {
            if (user && user.role === 1) {
                return <p> Redirect to admin</p>
            } else {
                return <p>redirect to user</p>
            }
        }
        if (isAuthenticated()) {
            return <p>redirect to user</p>
            // return <Redirect to="/"></Redirect>
        }
    }

    const loadingMessage = () => {
        return (
           loding && (
               <div className="alert alert-info">
                   <h2>Loading.....</h2>
               </div>
           )
        );
    }

    const errorMessage = () => {
        return (
            <div className="alert alert-danger" role="alert" style={{ display: error ? "" : "none" }}>
                {error}
            </div>
        );
    }

    const signInForm = () => {
        return (
            <div className="signup">
                {loadingMessage()}
                {errorMessage()}
                <h1 className="signin-h1">Log In</h1>
                <form className="form-signin">
                    <div className="form-label-group">
                        <input type="email" onChange={handleChange("email")} value={email} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label htmlFor="inputEmail" >Email address</label>
                    </div>
                    <div className="form-label-group">
                        <input type="password" onChange={handleChange("password")} value={password} id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button onClick={onSubmit} className="btn btn-lg btn-success btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }

    return (
        <Base title="User Signin" description="User login">
            {signInForm()}
            {performRedirect()}
        </Base>
    )
}


export default withRouter(Signin);
