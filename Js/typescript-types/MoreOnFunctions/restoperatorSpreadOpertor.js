"use strict";
let arr = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...rest] = arr;
console.log(arr);
let arr2 = ["d", "j", "m", "b"];
console.log([...arr, ...arr2]);
