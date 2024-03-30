//generic function
//type can store array type defined
let a: number[] = [1, 2, 3, 4, 56, 7];
let d: string[] = ["he", "lion"];
function getFirstElementArray<Type>(arr: Type[]): Type {
  return arr[0];
}
let m = getFirstElementArray(a);
let mv = getFirstElementArray(d);
console.log(m);
