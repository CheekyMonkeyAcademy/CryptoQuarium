import React from "react";
import "./Home.css";

const Home = props =>
    <div className="home">
        <div class="row">
            <div id="linkBox" class="col s6 push-s3 center-align">
                <h1><a href="https://www.reddit.com/r/CryptoQuarium/" target="_new">Share Your Fish On Reddit!</a></h1>
            </div>
        </div>
        {props.children}
    </div>

export default Home;