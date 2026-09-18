import React, { useState } from "react"
interface formProps{
    onSubmit(order: {name :string , cups : number}):void
}

const Form = ( {onSubmit}:formProps) => {

   const [name ,setName ] = useState<string>('')
   const [cups ,setCups] = useState<number>(0)

   const handleSubmit =(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    onSubmit({name ,cups})

   }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor=""> Chai Name</label>
            <input   value={name} onChange={(e :React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} />

            <label htmlFor=""> Cups</label>
            <input type="number"  value={cups} onChange={(e :React.ChangeEvent<HTMLInputElement>)=> setCups(Number(e.target.value) || 0)} />

            <div>
                <button type="submit">Place Order</button>
            </div>

        </form>
    </div>
  )
}

export default Form