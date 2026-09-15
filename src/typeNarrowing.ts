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

// custom types
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
    return ` Serving custom chai : ${item}`
}


/ types ke bhi types /

type MasalaChai ={
    type : "Masala"
    spiceLevel : number
}
type GingerChai = {
    type : "Ginger"
    amount : number
}
type ElaichiChai = {
    type : "elaichi"
    aroma : number
}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order :Chai){
    switch (order.type) {
        case "Masala":
            return `Masala Chai`       
            break;
        case "Ginger":
            return `Ginger Chai`       
            break;
        case "elaichi":
            return `Elaichi Chai`       
            break;   

    }
}

function brew(order : MasalaChai | GingerChai){
    if('spicelevel' in order){
        return ` Masala Chai`
    }
}


// function isStringArray(arr :unknown): arr is string[]{
//     //

// } 
