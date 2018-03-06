import React from "react";
import './SidebarContent.css'

//This is changing the background of the sidenav
// const styles = {
//     content: {
//         height: '100%', 
//         // backgroundColor: '#e3f2fd',
//         backgroundColor: 'orange',         
//         padding: '10px', 
//         //This did not change the overlay div, but you have tried it
//         // overflowY: 'auto'
//     },
//     sidebar: {
//         overflowY:'auto'
//     }
// }

const styles = {
    
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,    
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',    
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'none',       
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {    
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  }
}

const SidebarContent = (props) => {
//    const style = styles.content

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