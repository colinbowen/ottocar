import React from 'react'

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
    </div>
</div>;

export default Car;