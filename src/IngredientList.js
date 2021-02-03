import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    //iterate over the ingredients, return an li with Ingredient component
    //component, given the ingredient
    render() {
        let ingredients = this.props.ingredients.map(ingredient => (
            <li onClick={this.props.add}>
                <Ingredient ingredient={ingredient} />
            </li>
        ))
        return (
            <section className='pane'>
                <h1>Ingredient List</h1>
                <ul className="ingredient-list">
                    {ingredients}
                </ul>
            </section>
        )
    }
}

export default IngredientList