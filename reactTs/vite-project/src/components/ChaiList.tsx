import type { Chai } from "../types"
import Card from "./Card"

interface ChaiListProps{
    items : Chai[]
}


const ChaiList = ({items}: ChaiListProps) => {
  return (
    <div>
        { items.map((chai) =>(
            <Card key={chai.id} name = {chai.name} price={chai.price} isSpecial ={chai.price >40}/>
        ))}
    </div>
  )
}

export default ChaiList