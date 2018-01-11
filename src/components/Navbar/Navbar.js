import React from "react";
import canbcheeky1 from '../../Images/canbcheeky1.png';
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
    <nav class="#607d8b blue-grey">
        <div className="nav-wrapper">
            <a className="brand-logo right">
                <img alt="" src={canbcheeky1} style={{ width: 240, marginTop: 15 }} />
            </a>
            <a data-activates="mobile-demo" class="button-collapse">
                <i class="material-icons">menu</i>
            </a>

            <ul className="left hide-on-med-and-down">
                <li onClick={() => { props.handlePageChange("Login"); }}
                    className={props.currentPage === "Login" ? "active" : ""}>
                    <a>Login</a>
                </li>

                <li onClick={() => { props.handlePageChange("Home"); }}
                    className={props.currentPage === "Home" ? "active" : ""}>
                    <a>Home</a>
                </li>

                <li onClick={() => { props.handlePageChange("MyAquarium"); }}
                    className={props.currentPage === "MyAquarium" ? "active" : ""}>
                    <a>My Aquarium</a>
                </li>

                <li onClick={() => { props.handlePageChange("FishMarket"); }}
                    className={props.currentPage === "FishMarket" ? "active" : ""}>
                    <a>FishMarket</a>
                </li>

                <li onClick={() => { props.handlePageChange("Wallet"); }}
                    className={props.currentPage === "Wallet" ? "active" : ""}>
                    <a>Wallet</a>
                </li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
                <li onClick={() => { props.handlePageChange("Login"); }}
                    className={props.currentPage === "Login" ? "active" : ""}>
                    <a>Login</a>
                </li>

                <li onClick={() => { props.handlePageChange("Home"); }}
                    className={props.currentPage === "Home" ? "active" : ""}>
                    <a>Home</a>
                </li>

                <li onClick={() => { props.handlePageChange("MyAquarium"); }}
                    className={props.currentPage === "MyAquarium" ? "active" : ""}>
                    <a>My Aquarium</a>
                </li>

                <li onClick={() => { props.handlePageChange("FishMarket"); }}
                    className={props.currentPage === "FishMarket" ? "active" : ""}>
                    <a>FishMarket</a>
                </li>

                <li onClick={() => { props.handlePageChange("Wallet"); }}
                    className={props.currentPage === "Wallet" ? "active" : ""}>
                    <a>Wallet</a>
                </li>
            </ul>
        </div>
    </nav>

    // THIS SCRIPT HAS TO BE PLACED SOMEWHERE FOR THE DROPDOWN MENU TO WORK BUT DON'T KNOW WHERE??
{/* <script>
    $(".button-collapse").sideNav();
</script> */}
    

export default Navbar;