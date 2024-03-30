//interface
//interface which is always extendable
interface list {
  v: number;
  h: boolean;
}
interface list {
  j: string;
}
let jack: list = {
  v: 56,
  h: true,
  j: "string",
};

//typeAliases
//type cannot be re-opened to add some new properties
type massive = {
  g: number;
  y: boolean;
};
//this statement gives error
// type massive = {
//   b: string;
// };

//function type expressions
//(a: string) => void (a type of string that does not have return value)
function dataS(fn: (a: string) => void) {
  fn("This is also function");
}
