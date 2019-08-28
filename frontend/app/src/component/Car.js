import React from 'react'
import {Button} from 'react-bootstrap'
import './car.css'

import axios from "axios"

function deleteCar(id){
    console.log(id)

    let url = 'https://shielded-basin-67477.herokuapp.com/api/v1/cars/' + id

    axios.delete(url)
    .then( function(response) {
        console.log(response);
    }).catch( function(error) {
        console.log(error);
    })
}



const Car = props =>
<div className="card">
    <div className="card-body">
        <h5 className="card-title">{props.make}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
        <br></br>
        {props.model}
        <br></br>
        {props.year}     
        </h6>
        <Button className="right" variant="outline-danger" onClick={ () => deleteCar(props.id)}>Delete Car</Button>
        
    </div>
</div>;

export default Car;