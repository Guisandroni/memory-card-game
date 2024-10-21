import { useState } from "react"
import { Card } from "./card"


export interface gridItem{
    id:number,
    img:string,
    stat:string,
}

export interface cardBack{
    id: number,
    img:string,
    stat: string,
}


export function Grid(){


const [grid, setGrid] = useState<gridItem[]>([
    {id:1, img: '../../public/images/card-Boo.png', stat:''},
    {id:1, img: '../../public/images/card-Boo.png', stat:''},
    {id:2, img: '../../public/images/card-Cell.png', stat:''},
    {id:2, img: '../../public/images/card-Cell.png', stat:''},
    {id:3, img: '../../public/images/card-Freeza.png', stat:''},
    {id:3, img: '../../public/images/card-Freeza.png', stat:''},
    {id:4, img: '../../public/images/card-Gohan.png', stat:''},
    {id:4, img: '../../public/images/card-Gohan.png', stat:''},
    {id:5, img: '../../public/images/card-Goku.png', stat:''},
    {id:5, img: '../../public/images/card-Goku.png', stat:''},
    {id:6, img: '../../public/images/card-Kuririn.png', stat:''},
    {id:6, img: '../../public/images/card-Kuririn.png', stat:''},
    {id:7, img:'../../public/images/card-Piccolo.png', stat:''},
    {id:7, img: '../../public/images/card-Piccolo.png', stat:''},
    {id:8, img: '../../public/images/card-Vegeta.png', stat:''},
    {id:8, img: '../../public/images/card-Vegeta.png', stat:''},
    {id:9, img: '../../public/images/card-Satan.png', stat:''},
    {id:9, img: '../../public/images/card-Satan.png', stat:''},
    {id:10, img: '../../public/images/card-Trunks.png', stat:''},
    {id:10, img: '../../public/images/card-Trunks.png', stat:''},


   
].sort(() => Math.random() - 0.5));

const [back, setBack] = useState<cardBack[]>([
    {id:1, img: '../../public/images/card.png', stat:''},
    {id:1, img: '../../public/images/card.png', stat:''},
    {id:2, img: '../../public/images/card.png', stat:''},
    {id:2, img: '../../public/images/card.png', stat:''},
    {id:3, img: '../../public/images/card.png', stat:''},
    {id:3, img: '../../public/images/card.png', stat:''},
    {id:4, img: '../../public/images/card.png', stat:''},
    {id:4, img: '../../public/images/card.png', stat:''},
    {id:5, img: '../../public/images/card.png', stat:''},
    {id:5, img: '../../public/images/card.png', stat:''},
    {id:6, img: '../../public/images/card.png', stat:''},
    {id:6, img: '../../public/images/card.png', stat:''},
    {id:7, img:'../../public/images/card.png', stat:''},
    {id:7, img: '../../public/images/card.png', stat:''},
    {id:8, img: '../../public/images/card.png', stat:''},
    {id:8, img: '../../public/images/card.png', stat:''},
    {id:9, img: '../../public/images/card.png', stat:''},
    {id:9, img: '../../public/images/card.png', stat:''},
    {id:10, img: '../../public/images/card.png', stat:''},
    {id:10, img: '../../public/images/card.png', stat:''},


   
])


    return (

        <div className="container">
            {grid.map((grid, index)=> (
                <Card  key={index} grid={grid} />
            ))}

            {back.map((back, index) =>(
            <Card key={index} back={back}/>
        ))}
        </div>
    )
}