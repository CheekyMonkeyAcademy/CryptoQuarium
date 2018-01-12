import React from 'react';
import AppContainer from "./components/AppContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import MyAquarium from "./components/pages/MyAquarium";
import Wallet from "./components/pages/Wallet";
import FishMarket from "./components/pages/FishMarket";

const App = () => 
    <Router>
        <div>
            {/* <AppContainer /> */}
            <Navbar />
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/MyAquarium" component={MyAquarium} />
            <Route exact path="/Wallet" component={Wallet} />
            <Route exact path="/FishMarket" component={FishMarket} />
            <Route exact path="/Home" component={AppContainer} />
        </div>
    </Router>
export default App;
