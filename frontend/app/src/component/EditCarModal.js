//EditCarModal.js
import React from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';



class EditCarModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
      }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  editCar = (e) => {
    e.preventDefault();

    let id = this.props.id;
    let make = this.props.make;
    let model = this.props.model;
    let year = this.props.year;
    let active = this.props.active;

    if (document.getElementById("editFormMake").value) {
        make = document.getElementById("editFormMake").value;
    }
    if (document.getElementById("editFormModel").value) {
        model = document.getElementById("editFormModel").value;
    }
    if (document.getElementById("editFormYear").value) {
        year = document.getElementById("editFormYear").value;
    }
    if (document.getElementById("editFormActive").value) {
        active = document.getElementById("editFormActive").value;
    }

    let car = {
        "make": make,
        "model": model,
        "year": year,
        "active": active,
    }

    car = JSON.stringify(car);
    let url = 'https://shielded-basin-67477.herokuapp.com/api/v1/cars/' + id
    axios.put(url, {car})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("Clicked Edit, edited car...." + car);
    
}

  render() {
    return (
        <div>
        <button type="button" className="btn btn-outline-secondary" onClick={this.handleShow}>Edit Car</button>

        <Modal show={this.state.show} onHide={this.state.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.props.make} - {this.props.model}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.editCar}>
                <Form.Group controlId="editFormMake">
                    <Form.Label>Make</Form.Label>
                    <Form.Control type="text" placeholder={this.props.make} />
                </Form.Group>
                <Form.Group controlId="editFormModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" placeholder={this.props.model} />
                </Form.Group>
                <Form.Group controlId="editFormYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder={this.props.year} />
                </Form.Group>
                <Form.Group controlId="editFormActive">
                    <Form.Label>Active</Form.Label>
                    <Form.Control type="text" placeholder={this.props.active.toString()} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-secondary" onClick={this.handleClose}>
                Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }
}

export default EditCarModal;