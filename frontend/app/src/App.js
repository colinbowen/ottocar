import React, {Component} from 'react';
import './App.css';


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