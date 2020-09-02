import React, { useState } from "react";
import Base from "../core/Base";
import { Link, withRouter } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({ ...values, name: "", email: "", password: "", error: "", success: true })
                }
            })
            .catch(
                console.log("Error in signup")
            )
    }

    const signUpForm = () => {
        return (
            <div className="signup">
                {successMessage()}
                {errorMessage()}
                <h1 className="signin-h1">Register</h1>
                <form className="form-signin">
                    <div className="form-label-group">
                        <input type="text" id="name" onChange={handleChange("name")} value={name} className="form-control" placeholder="Name" required autofocus />
                        <label htmlFor="inputEmail">Name</label>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" onChange={handleChange("email")} value={email} className="form-control" placeholder="Email address" required autofocus />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" onChange={handleChange("password")} value={password} className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button onClick={onSubmit} className="btn btn-lg btn-success btn-block" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
    const successMessage = () => {
        return (
            <div className="alert alert-success" role="alert" style={{ display: success ? "" : "none" }}>
                User registered successfully. Please <Link to="/signin">Login here</Link>
            </div>
        );
    }

    const errorMessage = () => {
        return (
            <div className="alert alert-danger" role="alert" style={{ display: error ? "" : "none" }}>
                {error}
            </div>
        );
    }

    return (
        <Base title="Register User Account" description="Register user account">
            {signUpForm()}
        </Base>
    )
}


export default withRouter(Signup);
