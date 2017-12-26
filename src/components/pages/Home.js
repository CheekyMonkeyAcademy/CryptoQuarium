import React, {Component} from "react";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Footer from "../Footer";

//This is NOT a statful component at the moment
    //This is where the login page will live

//TODO: Once a user logs in:
    //Will there be an additional home page that displays specs?
    //OR
    //Just route directly to the users personal Aquarium page?

//INPUT LOGIN PAGE!!
//NEST WRAPPER/LOGIN/FOOTER HERE!!


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header>CryptoQuarium</Header>
        <div className="App">            
            <h5 className="center-align">A description about what this does and how awesome this app is and other stuff</h5>
        </div>
        <Footer>Canbcheeky</Footer>
      </Wrapper>
    );
  }
}

export default Home;