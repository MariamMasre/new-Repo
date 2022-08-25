import React from "react";
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast";




class Main extends React.Component {
  render() {

    return (
      <div>
        <Row xs={1} md={4} className="g-4">

          
          {this.props.horndBeastData.map((beast, idx) => {
           return (
             <HornedBeast
               key={idx}
               index={idx}
               horns={beast.horns}
               src={beast.image_url}
               title={beast.title}
               description={beast.description}
               myFunction={this.props.myFunction} />




           )


         })}


        </Row>
      </div>
    )

  }

}

export default Main;

