import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfPets: ""

    }
  }
  incrementNumOfPets = () => {
    this.setState({
      numOfPets: this.state.numOfPets + "❤️"
    })

  }
  selDataHandler=()=>{}
  render() {
  
    return (
      
      <Col>
            <Card style={{borderradius: '15px', margin: '10px', width: '270px' , background: '#FFE4E1' }} class="card">
             
                <Card.Img  style={{ height: '170px' , marginbottom: '15px' , backgroundsize: 'cover' , borderradius: '15px 15px 0 0'}} variant="top" src={this.props.src}  alt= {this.props.title} onClick={this.incrementNumOfPets} />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>
                    🦄 Num of horns: {this.props.horns}
                  </Card.Text>
                  <Card.Text>
                    ❤️ Num of pets: {this.state.numOfPets}
                  </Card.Text>
                  <Button variant="info" onClick={()=>{this.props.myFunction(this.props.title)}} >select</Button>
                </Card.Body>
             
            </Card>
            </Col>
           
        )
     


    

  }

}

export default HornedBeast;


