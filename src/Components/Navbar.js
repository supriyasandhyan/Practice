import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <nav className="navbar">
            <Link to="#" className="navbar-logo">React Task</Link>
            
            <ul className="navbar-links">

            <li className="navbar-dropdown">
                <Link to="/UserAuthentication/Home">Home
                <i class="fa fa-angle-down"></i></Link>
            </li>
            <li className="navbar-dropdown">
            <Link to="/Context">ContextApi</Link>

            </li>

            <li className="navbar-dropdown">
                <Link to="/NestedRoute/Admin">Admin</Link>
            </li>

            <li className="navbar-dropdown">
                <Link to="/Tasks">My Tasks</Link>
                <div className="dropdown">
                    <Link to="/hooks">Hooks</Link>
                    <Link to="/Form">Handling Events</Link>
                    <Link to="/CompProps">components & props</Link>
                    <Link to="/SwitchToggle">Conditional Rendering</Link>
                    <Link to="/Refs">Refs Form</Link>
                    {/* <Link to="/src/Form/FormNew.js">FormNew</Link> */}


                </div>
            </li>

            <li className="navbar-dropdown">
                <Link to="/UserAuthentication/Dashboard">Dashboard</Link>
            </li>

            </ul>
        </nav>
    );
}
export default Navbar;