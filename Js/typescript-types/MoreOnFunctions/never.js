"use strict";
let neverType;
let func = () => {
    throw new Error("invalid arguments");
};
neverType = func();
