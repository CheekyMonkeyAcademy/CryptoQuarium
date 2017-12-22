import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Header from './components/Header';
import Tank from './components/Tank';


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>CryptoQuarium</Header>
      <div className="App">
        <h3 className="center-align">Welcome to CryptoQuarium</h3>
        <Tank className="">Fishtank Goes here</Tank>
      </div>
      <Footer>Canbcheeky</Footer>
      </Wrapper>
    );
  }
}

export default App;
