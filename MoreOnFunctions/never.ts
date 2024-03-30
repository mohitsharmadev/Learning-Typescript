//Never keyword used can not assign a value it throw error
// let neverType: never = true; //it throw error

let neverType: never;

let func = () => {
  throw new Error("invalid arguments");
};

neverType = func(); //when assign function that (function can never end) can not throw error
