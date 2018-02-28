import React from "react";
// import "./Logout.css";

const Logout = () =>
    <div className="logout-page">
        <div className="button">
            <a method='POST' href='/auth/logout'>
                <button className="btn btn-large red waves-effect"><i className="material-icons right">add</i>Logout of CryptoQuarium</button>
            </a>        
        </div>
    </div>

export default Logout;