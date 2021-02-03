import React, { Component } from 'react'
import Ingredient from './Ingredient'
import IngredientList from './IngredientList'

class BurgerStack extends Component {
    render() {
        let bits = this.props.burgerBits.map(bit => <li><Ingredient ingredient={bit} /></li>)

        return (
            <div>
                <h2>BURGER STACK</h2>
                <ul className='burger'>
                    {bits}
                </ul>
            </div>
        )
    }
}

export default BurgerStack