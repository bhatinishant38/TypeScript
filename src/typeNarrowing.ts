function getChai(kind : string | number){
    if(typeof kind === 'string'){
        return ` Making ${kind} chai...`
    }
    return ` Chai order : ${kind}`
}

function serverChai(chai ? :string){
    if(chai){
        return `serving ${chai}`
    }
    return `serving default masala chai`
}

function orderChai(size : "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size === 'medium' || size === "large"){
        return `make extra chai`
    }
    return `chai order ${size}`

}

class kulhadChai{
    serve(){
        return `serving cutting chai`
    }
}

class masalaChai{
    serve(){
        return `serving masala chai`
    }
}

function serve(chai : kulhadChai | masalaChai){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }
}

type ChaiOrder = {
    type : string
    sugar : number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === 'object'  &&
         obj !== null &&
         typeof obj.type === "string" &&
         typeof obj.type === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
}