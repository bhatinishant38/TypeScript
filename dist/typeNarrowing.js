function getChai(kind) {
    if (typeof kind === 'string') {
        return ` Making ${kind} chai...`;
    }
    return ` Chai order : ${kind}`;
}
function serverChai(chai) {
    if (chai) {
        return `serving ${chai}`;
    }
    return `serving default masala chai`;
}
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai...`;
    }
    if (size === 'medium' || size === "large") {
        return `make extra chai`;
    }
    return `chai order ${size}`;
}
class kulhadChai {
    serve() {
        return `serving cutting chai`;
    }
}
class masalaChai {
    serve() {
        return `serving masala chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return ` Serving custom chai : ${item}`;
}
/ types ke bhi types /;
function MakeChai(order) {
    switch (order.type) {
        case "Masala":
            return `Masala Chai`;
            break;
        case "Ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return `Elaichi Chai`;
            break;
    }
}
function brew(order) {
    if ('spicelevel' in order) {
        return ` Masala Chai`;
    }
}
export {};
// function isStringArray(arr :unknown): arr is string[]{
//     //
// } 
//# sourceMappingURL=typeNarrowing.js.map