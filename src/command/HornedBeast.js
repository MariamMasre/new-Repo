import React from "react";


class HornedBeast extends React.Component{
    render(){
      
    return(
     <div>
      <h2>{this.props.title}</h2>
      <p>{this.props.disc}</p>
      <img src={this.props.img} alt={this.props.title}></img>
      </div>
    )
    
    }
    
    }
    
    export default HornedBeast;