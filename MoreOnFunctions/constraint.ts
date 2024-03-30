let am: number[] = [1, 2, 3, 4, 56, 7];
let dm: string[] = ["he", "lion"];
function getFirstElementArrayUsingConstraint<Type extends string | number>(
  arr: Type[]
): Type {
  return arr[0];
}
let aa = getFirstElementArrayUsingConstraint(a);
let mz = getFirstElementArrayUsingConstraint(d);
console.log(aa);
console.log(mz);

//specified type arguments

function getCombinedTwoArrays<type>(arr: type[], arr2: type[]): type[] {
  return arr.concat(arr2);
}
getCombinedTwoArrays<string | number>([1, 2, 3, 4, 56, 7], ["he", "lion"]);
