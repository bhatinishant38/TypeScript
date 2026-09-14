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

