
interface chaiCardProp {
    name : string ,
    price : number,
    isSpecial? : boolean
}

const Card = ({name ,price ,isSpecial = false}:chaiCardProp) => {
  return (
    <div>
        <h2>{name} {isSpecial && <span>🤣</span>}</h2>
        <p>{price}</p>
    </div>
  )
}

export default Card