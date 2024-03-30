"use strict";
let variety = 4;
variety = "string";
function printId(id) {
    console.log(id);
}
printId("noun");
function print(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
