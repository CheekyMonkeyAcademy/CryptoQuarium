import React from "react";
import Tank from "../Tank";
import logoimg from "../../Images/logo2.png";

const MyAquarium = () => 

    <div>
        <div className="container">
            <div className="row">
                <div className="col s8">
                    <h3 className="logo #757575 center grey darken-1 z-depth-5">My Aquarium</h3>
                </div>
                <div className="col s2 offset-s2">
                    <img alt="" src={logoimg} style={{ width: 150, marginTop: 15 }} />
                </div>
            </div>            
        </div>
        <div>
            <Tank />
        </div>
  
    </div>

export default MyAquarium;