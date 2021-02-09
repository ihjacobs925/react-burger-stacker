import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane (props) {
    return (
        <section className='pane'>
            <h1>BURGER PANE</h1>
            <BurgerStack burgerBits={props.burgerBits} />
            <ClearBurger clearBurger={props.clearBurger} />
        </section>
    )
}

// class BurgerPane extends React.Component {
//     render() {
//         return (
//             <section className='pane'>
//                 <h1>BURGER PANE</h1>
//                 <BurgerStack burgerBits={this.props.burgerBits}/>
//                 <ClearBurger clear={this.props.clear} />
//             </section>
//         )
//     }
// }

export default BurgerPane;