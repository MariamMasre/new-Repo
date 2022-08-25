import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ReactBootstrap extends React.Component{

    constructor(props){
        super(props);
        this.state={
         kindOfHorns:'',
         
        }
    }

    handleSumit =(e) => {
        e.preventDefault();
      
        this.setState({
            kindOfHorns:e.target.numberOfHorns.value,
            
        })
    }
   
chaneHandler =(e)=>{
    console.log(e.target.value)
}

    render(){
      
    return(
        <>
        <Form onSubmit={this.handleSumit}>
        
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">view the beasts by the number of horns</Form.Label>
            <Form.Select id="numberOfHorns" onChange={this.chaneHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="more">more</option>
            </Form.Select>
          </Form.Group>
          
          <Button variant="primary" type="submit" >Submit</Button>
        
      </Form>
      
      </>
    )
    
    }
    
    }
    
    export default ReactBootstrap;