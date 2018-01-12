import React from "react";
import canbcheeky1 from '../../Images/canbcheeky1.png';
import { Link } from "react-router-dom";
import "./Navbar.css";



//Possible pages we will need:
//Login 
//User personal aquarium - "MyAquarium"
//Buy/Sell your fish
//Crypto "Bank Account"
//Site home page
//User logs in and has access to their own personal aquarium site

//TODO:: Add logic that limits what pages users have access to based on whether they are logged in or not

const Navbar = props =>
    <nav className="#607d8b blue-grey">
        <div className="nav-wrapper">
            <a className="brand-logo right">
                <img alt="" src={canbcheeky1} style={{ width: 240, marginTop: 15 }} />
            </a>
            <a data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons">menu</i>
            </a>

            <ul className="left hide-on-med-and-down">

                <li                    
                    className={
                        window.location.pathname === "/Login" ? "active" : ""
                    }
                >                    
                    <Link to="/Login">Login</Link>
                </li>

                <li                    
                    className={
                        window.location.pathname === "/" || 
                        window.location.pathname === "/Home" 
                        ? "active" 
                        : ""
                    }
                >                    
                    <Link to="/Home">Home</Link>
                </li>

                <li                    
                    className={
                        window.location.pathname === "/MyAquarium" ? "active" : ""
                    }
                >                    
                    <Link to="/MyAquarium">MyAquarium</Link>
                </li>

                <li                   
                    className={
                        window.location.pathname === "/FishMarket" ? "active" : ""
                    }
                >                    
                    <Link to="/FishMarket">FishMarket</Link>
                </li>

                <li                
                    className={
                        window.location.pathname === "/Wallet" ? "active" : ""
                    }
                >
                    <Link to="/Wallet">Wallet</Link>
                </li>
            </ul>
        </div>
    </nav>

    // THIS SCRIPT HAS TO BE PLACED SOMEWHERE FOR THE DROPDOWN MENU TO WORK BUT DON'T KNOW WHERE??
{/* <script>
    $(".button-collapse").sideNav();
</script> */}
    

export default Navbar;