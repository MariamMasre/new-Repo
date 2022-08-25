import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
class SelectedBeast extends React.Component{
    render(){
      
    return(
     
       

      <Modal show={this.props.showModal} onHide={this.props.handleClose} style={{borderradius: '15px', margin: '10px' }}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img variant="top" style={{ height: '170px' , marginbottom: '150px' , width: '450px'  , borderradius: '15px 15px 0 0'}}  src={this.props.selBeast.image_url} alt={this.props.selBeast.title} />

            <p>{this.props.selBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
     
    )
    
    }
    
    }
    
    export default SelectedBeast;
