import React from "react";
import "./LoginBackground.css";
import { button } from 'react-materialize';

const LoginBackground = props =>
    <div className="login">
            <div className="button">
                <a method='POST' href='/auth/google'>
                    <button className="btn btn-large red waves-effect"><i className="material-icons right">add</i>SIGN-IN WITH GOOGLE</button>
                </a>        
            </div>
        {props.children}
    </div>

export default LoginBackground;
