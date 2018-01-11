import React from "react";
import Tank from "../Tank";


//This is NOT a stateful component- not sure at the moment if it needs to be

//What components need to be in here?
    //Tank
    //Water
    //Fish

const MyAquarium = () => 

    <div>
        <br/><br/>
        <div className="container">
            <h3 className="logo #757575 center grey darken-1 z-depth-5">My Aquarium</h3>
        </div>
        <div>
            <Tank />
        </div>
    </div>

export default MyAquarium;