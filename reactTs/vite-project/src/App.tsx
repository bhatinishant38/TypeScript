import Card from "./components/Card"
import Counter from "./components/Counter"
import ChaiList from "./components/ChaiList"
import type { Chai } from "./types"
import Form from "./components/Form"
import Cards from "./components/Cards"


const menu : Chai[] = [
  {id:1 ,name : "masala" ,price: 300},
  {id:2 ,name : "ginger" ,price: 350},
  {id:2 ,name : "palak" ,price: 250},
]

function App() {
  return (
    <>
    <div>App</div>
     <Card name ="Masala" price={78} isSpecial={false}></Card>

     <div>
      <Counter></Counter>
     </div>

     <div>
      <ChaiList items={menu}/>
     </div>

     <div>
      <Form onSubmit={(order)=>{console.log(order.name , order.cups)}}></Form>
     </div>


<div>
      <Cards title="papa" footer='nishant'/>
</div>
    </>
  )
}

export default App
