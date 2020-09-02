import React from 'react'
import { Link, withRouter } from "react-router-dom"

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: "#26ae60"}
    }else{
        return {color: "#ffff"}
    }
}

const Menu = ({history}) => (
    <div>
        <ul className="nav justify-content-center bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} to="/" className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/cart")} to="/cart" className="nav-link" href="#">Cart</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/user/dashboard")} to="/user/dashboard" className="nav-link" href="#">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/admn/dashboard")} to="/admn/dashboard" className="nav-link" href="#">Admin Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/signup")} to="/signup" className="nav-link" href="#">Signup</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/signin")} to="/signin" className="nav-link" href="#">Signin</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/signout")} to="/signout" className="nav-link" href="#">Signout</Link>
            </li>
        </ul>
    </div>
)

export default withRouter(Menu);
