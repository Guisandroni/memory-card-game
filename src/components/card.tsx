import {cardBack, gridItem} from './grid'

interface propGrid {
    grid: gridItem,
    
}

interface propBack{
    back: cardBack,
}


export function Card({grid, back}: propGrid : propBack){
    return(
        <div className="CardContainer">
        <img src={grid.img} alt={`Card ${grid.id}`} />
        <img src={back.img} alt={`Back ${back.id}`}/>
            
        </div>

    )
}