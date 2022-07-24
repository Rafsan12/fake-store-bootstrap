import React from 'react';
import "./Menubar.css"



const Menubar = (props) => {
    return (
        <div>
            <h1 className="text-secondary"> Welcome to Fake store With bootstrap </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end" >
                        <li className="list-container p-2 me-4">Home</li>
                        <li className="list-container p-2 me-4">Cart <sup>{props.count}</sup></li>
                        <li className="list-container p-2 me-4">About</li>
                        <li className="list-container p-2 me-4">Login</li>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Menubar;