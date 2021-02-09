import React from 'react';
import Ingredient from './Ingredient';

function BurgerStack(props) {
  
  let bits = props.burgerBits.map(bit => {
    return <li><Ingredient ingredient={bit} /></li>
  })
  return (
    <div>
      <ul className='burger-stack'>
        {bits}
      </ul>
    </div>
    
  )
}



export default BurgerStack;

