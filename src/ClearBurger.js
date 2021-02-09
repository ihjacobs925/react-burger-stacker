import React from 'react';


function ClearBurger(props){
  return (
    <button onClick={props.clearBurger}>Clear Burger</button>
  )

}
// const ClearBurger = (props) => {

//     return (
//         <button onClick={props.clearBurger}>Clear Burger</button>
//     )
// }

// class ClearBurger extends React.Component {

//     render() {
//         return <button onClick={this.props.clear} className="clear-btn">Clear Burger</button>
//     }
// }

export default ClearBurger;
//to func