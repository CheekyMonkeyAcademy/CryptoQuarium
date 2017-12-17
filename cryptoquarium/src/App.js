import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Header";
import FriendCard from "./components/Footer";
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>CryptoQuarium</Header>
      <div className="App">
        <h3 className="center-align">Welcome to CryptoQuarium</h3>
      </div>
      </Wrapper>
    );
  }
}

export default App;
