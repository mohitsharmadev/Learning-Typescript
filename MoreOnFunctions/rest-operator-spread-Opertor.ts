//Assignment operator left side is rest operator and right side spread operator
//rest operator       =            //spread operator

//rest operator means used rest of values are stored that rest operator

let arr = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...rest] = arr;
console.log(arr);

//spread operator opens all array parts
let arr2 = ["d", "j", "m", "b"];
console.log([...arr, ...arr2]);
