import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
        return (
            <section className='pane'>
                <h1>BURGER PANE</h1>
                <BurgerStack burgerBits={this.props.burgerBits}/>
                <ClearBurger clear={this.props.clear} />
            </section>
        )
    }
}

export default BurgerPane