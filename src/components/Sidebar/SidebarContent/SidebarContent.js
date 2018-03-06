import React from "react";
import './SidebarContent.css'

//This is changing the background of the sidenav
const styles = {
    content: {
        height: '100%', 
        // backgroundColor: '#e3f2fd',
        backgroundColor: 'orange',         
        padding: '10px', 
        //This did not change the overlay div, but you have tried it
        // overflowY: 'auto'
    },
    sidebar: {
        overflowY:'auto'
    }
}

const SidebarContent = (props) => {
   const style = styles.content

    return (
        <div style={styles.content}>
            <div>
                <ul>
                    {props.thisUserCred.userId ? 
                        <li><a id="logout" className="menu-item" href="/logout">Logout</a></li>     
                        : <li><a id="login" className="menu-item" href="/login">Login</a></li> 
                    }
                        <li><a id="home" className="menu-item" href="/home">Home</a></li>  
                        <li><a id="myaquarium" className="menu-item" href="/myaquarium">My Aquarium</a></li>
                        <li><a id="wallet" className="menu-item" href="/wallet">Wallet</a></li>   
                        <li><a id="fishmarket" className="menu-item" href="/fishmarket">Fish Market</a></li>              
                </ul>
            </div>
        </div>
    );
}

export default SidebarContent;