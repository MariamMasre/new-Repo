import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfPets: 0

    }
  }
  incrementNumOfPets = () => {
    this.setState({
      numOfPets: this.state.numOfPets + 1
    })

  }
  render() {

    return (
      // <div>
      //<h2>{this.props.title}</h2>
      //<p>{this.props.disc}</p>
      //<img src={this.props.img} alt={this.props.title}></img>
      //<p>Num of pets: 0</p>
      //<button>go some where</button>
      //</div>
      
            <Card style={{ width: '18rem' }}>
             
                <Card.Img variant="top" src={this.props.img} onClick={this.incrementNumOfPets} />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>
                    ❤️ Num of pets: {this.state.numOfPets}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             
            </Card>
         
        )
     


    

  }

}

export default HornedBeast;


