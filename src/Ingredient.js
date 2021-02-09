import React from 'react';

function Ingredient (props) {
    return (
        <p style={{backgroundColor: props.ingredient.color}}>{props.ingredient.name}</p>
    )
}

// class Ingredient extends React.Component {

//     render() {
//         return (
//             <p style={{backgroundColor: this.props.ingredient.color}}>{this.props.ingredient.name}</p>
//         )
//     }
// }

export default Ingredient;