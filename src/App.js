import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Custom.css';
import { Container, Row, Col } from 'react-bootstrap';

import{ Header } from "./component/Header";
import{ Home } from "./component/Home";
import{ Footer } from "./component/Footer";

class App extends Component {
  render() {
    return (
     <grid>
        <Header/>
        <Home/>
        <Footer/>
      </grid>
    );
  }
}

export default App;
