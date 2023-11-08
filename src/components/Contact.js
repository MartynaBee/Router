import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    
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
        <div className="container">
            <h4 className="center">
                Contact
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, magnam quibusdam. Voluptate repellat reprehenderit recusandae ut tempore ex quis, unde odit perspiciatis, possimus voluptates dolores iusto, assumenda voluptatem obcaecati? Odit.</p>
            </h4>
        </div>
    )
}

export default Contact;