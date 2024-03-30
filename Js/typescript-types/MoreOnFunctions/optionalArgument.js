"use strict";
function getOptionalFunctionParameter(a) {
    return a;
}
getOptionalFunctionParameter();
function getOptionalFunctionParameterWithCallback(arr, callback) {
    for (let i = 0; (i = arr.length); i++) {
        callback(arr[i], i);
    }
}
getOptionalFunctionParameterWithCallback([1, 2, 3, 4, 5, 6], (a) => {
    console.log(a);
});
getOptionalFunctionParameterWithCallback([1, 2, 3, 4, 5, 6], (a, i) => {
    console.log(a, i);
});
