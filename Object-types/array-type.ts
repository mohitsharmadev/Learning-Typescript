function arr(val: Array<string>) {
  console.log(val[0]);
  return val[0];
}
arr(["first", "second"]);

//readonly array type
function readonlyArray(value: ReadonlyArray<number>) {
  // Property 'push' does not exist on type 'readonly string[]'.
  // value.push(25)
  //readonly property cannot assign values
  return value[2];
}
readonlyArray([2, 5, 3, 6, 9]);
