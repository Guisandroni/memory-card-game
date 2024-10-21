import { useState } from 'react';
import {CardBack, gridItem} from './grid'

interface propGrid {
    grid: gridItem,
    
}

interface propBack{
    back: CardBack,
}


export function Card({grid, back}: propGrid & propBack){
    const [isFlipped, setIsFlipped] = useState(false);
   
    const handleClick =  () => {
       setIsFlipped(!isFlipped); // Alterna entre virado e não virado
      console.log(handleClick)
    };
    return(
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="CardContainer"   >
            <div className="frontCard">
            <img src={grid.img} alt={`Card ${grid.id}`} />

            </div>
            <div className="backCard">
            <img src={back.img} alt={`Back ${back.id}`}/>
            </div>            
        </div>
        </div>

    )
}

