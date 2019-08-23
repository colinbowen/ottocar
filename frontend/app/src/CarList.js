import App from "./App";

class CarList extends React.Component {
    render() {
      return (<div className="container">
      <div className="col-xs-12">
      <h1>Welcome.</h1>
      {this.state.cars.map((car) => (
        <div key={car.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{car.make}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            { car.model}
            <br></br>
            { car.year }            
            </h6>
          </div>
          
        </div>
        
      ))}
      </div>
     </div>);
    }
  }




export default CarList;