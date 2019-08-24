import React from 'react'

import Car from './Car';
import data from './data';
import Header from './Navigation'

import { Button, Form, Navbar } from 'react-bootstrap';


import axios from 'axios';

import './Layout.css'

class Layout extends React.Component{
    componentWillMount() {
        this.setState({
            cars: data,
        })
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
    
      


    addCar = (e) => {
        e.preventDefault();

        var cars = this.state.cars;
        const newID = cars[cars.length - 1 ].id + 1

        
        let car = {
            "id": newID,
            "make": document.getElementById("formBasicMake").value,
            "model": document.getElementById("formBasicModel").value,
            "year": Number(document.getElementById("formBasicYear").value),
            "active": document.getElementById("formBasicCheckbox").value,
        }

        console.log(car)

        car = JSON.stringify(car);

        console.log(car)
        axios.post('https://shielded-basin-67477.herokuapp.com/api/v1/cars', {car})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.forceUpdate();

        console.log("Clicked Add");

        
    }

    editCar= (e) => {
        e.preventDefault();

        console.log("Clicked Edit");
    }

    deleteCar = (e) => {
        e.preventDefault();

        console.log("Clicked Delete");
    }

    newCar = () => 
    <Form onSubmit={this.addCar}>
                    <Form.Group controlId="formBasicMake" name="make">
                        <Form.Label>Car Make</Form.Label>
                        <Form.Control name="make" type="text" placeholder="Enter Car Make" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicModel" name="model">
                        <Form.Label>Car Model</Form.Label>
                        <Form.Control name="model" type="text" placeholder="Enter Car Model" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicYear" name="year">
                        <Form.Label>Car Year</Form.Label>
                        <Form.Control name="year" type="text" placeholder="Enter Car Year" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" name="active">
                        <Form.Check name="active" type="checkbox" label="Active" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-block">
                        Add Car To DB
                    </Button>
                </Form>;

    render() {
        return (
            <div id="Layout" className="container">
                <Header/>
                <div className="col">
                    {this.newCar()}
                </div>
                <br></br>
                <div className="container">
                    <div className="row">
                       
                    
                    </div>
                </div>

                <br></br>

                <div className="col">
                    <div id="grid">
                        {this.state.cars.map(car_info => 
                        <Car key={car_info.id} make={car_info.make} model={car_info.model} year={car_info.year} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;