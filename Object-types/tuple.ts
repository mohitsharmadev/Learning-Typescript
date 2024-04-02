//tuple
function stair(pair: [string, number, boolean]) {
  pair[0] = "jkl";
  console.log(pair);
  return pair[2];
}
stair(["sk", 45, true]);

//readonly tuple
function stairs(pairs: readonly [string, number, boolean]) {
  // Cannot assign to '1' because it is a read-only property.
  //   pairs[1]="dug"
  return pairs[2];
}

stairs(["sk", 45, true]);
