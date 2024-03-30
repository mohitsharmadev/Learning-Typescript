"use strict";
function getFunctionOverload(c, v) {
    if (typeof c === "number" && typeof v === "number") {
        return c + v;
    }
    else if (typeof c === "string" && v === "string") {
        return c + v;
    }
    else {
        console.error("Invalid arguments");
    }
}
getFunctionOverload("f", "f");
getFunctionOverload("f", "f");
getFunctionOverload(8, 5);
getFunctionOverload("f", "f");
function len(v) {
    return v.length;
}
function lens(x) {
    return x.length;
}
