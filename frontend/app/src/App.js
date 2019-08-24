import React, {Component} from 'react';
import './App.css';

// import { Button, FormControl, Form, Navbar, Nav } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container'
// import { render } from "react-dom";

import Layout from "./component/Layout"


class App extends Component {
  state = {
    cars: []
  }

  componentDidMount() {
    fetch('https://shielded-basin-67477.herokuapp.com/api/v1/cars')
    .then(res => res.json())
    .then((data) => {
      this.setState({ cars: data })
      console.log(this.state.cars)
    })
    .catch(console.log)
  }

  render() {
    return ( 
      <Layout/>
    )
  }
  
}

export default App;