import React from "react";
import Header from "./command/Header";
import Footer from "./command/Footer";
import Main from "./command/Main";
import data from "./command/data.json";
import UserModal from "./command/SelectedBeast";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selBeast:{},
      show:false,
      selectehorm:data,
     numberHorrm:0

    }
  }
  myFunction =(title)=>{
    const selectedBeast = data.find(beast => beast.title === title);
    this.setState({
      show : true,
      selBeast : selectedBeast
    })

  }
  


 
  handleClose=()=>{
    this.setState({
      show:false
    }) 
  }
  numHorrm =(event)=>{
    this.setState({
      numberHorrm:event.target.value,
    })
    event.preventDefault();
    console.log(this.state.numberHorrm);
    let a = data.filter(item =>{
      switch(this.state.numberHorrm){
        case "1":
          case"2":
          return (item.horns == this.state.numberHorrm);
        case "3":
          return (item.horns >= this.state.numberHorrm);
          
        default:
          return true;
      }
    
    })
    this.setState({
      selectehorm:a
    })

  }
  render(){ 
    
  return(
   
   <div style={{ background: 'linear-gradient(rgb(121, 27, 184),rgb(212, 64, 193))'}}>
   
      <Header />
      <>
    <Form onSubmit={this.numHorrm}>
    
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">view the beasts by the number of horns</Form.Label>
        <Form.Select id="numberOfHorns" onClick={this.numHorrm}>
         <option>numbers of horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3 or more</option>
        </Form.Select>
      </Form.Group>
      
      <Button variant="primary" type="submit" >Submit</Button>
  </Form>
  
  </>
     
     
      <Main horndBeastData={this.state.selectehorm} myFunction={this.myFunction} />
      <Footer />
      <UserModal showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} />
    </div>
  )
  
  }
  
  }
export default App;
