import React, { useState } from 'react'
import './App.css'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

  
    function App() {
      // useState
      const [burgerbits, setBurgerbits] = useState([]);
      const [ingredients, setIngredients] = useState([
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ])
      
      // functions 
        //add ingredient 
      const addIngredient = (e) => {
        setBurgerbits([{name: e.target.innerText, color: e.target.style.backgroundColor}, ...burgerbits]);
      }
        // clear incredients
      const clearBurger = () => {
        setBurgerbits([]);
      }
      
      return (
        <div>
        <h1>Burger Stacker</h1>
      <main className='panes'>
        <IngredientList ingredients={ingredients} add={addIngredient} />
        <BurgerPane burgerBits={burgerbits} clear={clearBurger} />
      </main>
        </div>
      )
    };


  // Add an ingredient
//   addToStack = (e) => {
//     let name = e.target.innerText
//     let color = e.target.style.backgroundColor
//     // ------ splice
//     // let tempArray = this.state.burgerBits
//     // tempArray.splice(0, 0, {name, color})
//     // this.setState({
//     //   burgerBits: tempArray
//     // })
//     // ------ unshift
//     // let tempArray = this.state.burgerBits
//     // tempArray.unshift({name, color})
//     // this.setState({
//     //   burgerBits: tempArray
//     // })
//     // ------ spread operator
//     this.setState({
//       burgerBits: [{name, color}, ...this.state.burgerBits]
//     })
//   }

//   // Clear da burger

//   render() {
//     return (
//       <main>
//         <h1>Burger Stacker</h1>
//         <div className='panes'>
//           <IngredientList 
//             ingredients={this.state.ingredients} 
//             add={this.addToStack} 
//           />
//           <BurgerPane 
//             burgerBits={this.state.burgerBits} 
//             clear={this.clearBurger}
//           />
//         </div>
//       </main>
//     )
//   }
// }

export default App;