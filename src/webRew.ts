import axios, { type AxiosResponse } from 'axios'

interface Todo {
    userId : number ,
    id : number ,
    title : string ,
    completed : boolean
}

const fetchData = async ()=>{
    try {
        const reponse : AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log("Todo" ,reponse.data) 
    } catch (error :any) {
        if(axios.isAxiosError(error)){
            console.log(error.message);         
       }       
    }
}