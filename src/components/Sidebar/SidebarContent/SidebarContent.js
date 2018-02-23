import React from "react";


const SidebarContent = (props) => {
    

    return (
        <div>
            <a id="login" className="menu-item" href="/login">Login</a>
            <a id="home" className="menu-item" href="/home">Home</a>
            <a id="myaquarium" className="menu-item" href="/myaquarium">My Aquarium</a>
            <a id="wallet" className="menu-item" href="/wallet">Wallet</a>
        </div>
    );
}

export default SidebarContent;

{/* <OurSideNav 
    thisUserCred = {this.state.thisUserCred}>
    {this.state.thisUserCred.userId ? 
    <a id="logout" className="menu-item" href="/logout">Logout</a> 
    : <a id="login" className="menu-item" href="/login">Login</a>
    }
    <a id="home" className="menu-item" href="/home">Home</a>
    <a id="myaquarium" className="menu-item" href="/myaquarium">My Aquarium</a>
    <a id="wallet" className="menu-item" href="/wallet">Wallet</a>
    <a id="fishmarket" className="menu-item" href="/fishmarket">Fish Market</a>
</OurSideNav> */}