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