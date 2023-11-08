import React from "react";
import {Link, NavLink} from "react-router-dom"

const Navbar= () => {


    // const navigate = useNavigate();

    // useEffect(() => {

    //     const redirectTimeout = setTimeout(() => {
    //         navigate('/about');
    //     }, 2000);
    //     return () => {
    //         clearTimeout(redirectTimeout);
    //     }
    // }, [navigate]);

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Router </a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;