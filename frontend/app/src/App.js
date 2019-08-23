import React, {Component} from 'react';
import './App.css';
import { Button, FormControl, Form, Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'



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
       <div className="container">
         <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">otto dash</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://app.colinbowen.now.sh/index.html">Home</Nav.Link>
      <Nav.Link href="https://shielded-basin-67477.herokuapp.com/stats">Stats</Nav.Link>
      <Nav.Link href="https://github.com/colinbowen/ottocar">GitHub</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <div className="col-xs-12">
        <h1>Welcome.</h1>
        {this.state.cars.map((car) => (
          <div key={car.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{car.make}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              <br></br>
              { car.model}
              <br></br>
              { car.year }            
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;