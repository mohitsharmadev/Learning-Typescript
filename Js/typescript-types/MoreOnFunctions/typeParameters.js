"use strict";
function getFunctionInsideFunction(s, func) {
    return s;
}
getFunctionInsideFunction([1, "hello"], (value) => {
    console.log(value);
});
