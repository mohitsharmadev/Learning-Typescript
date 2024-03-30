let variety: number | string = 4;
variety = "string";
function printId(id: number | string) {
  console.log(id);
}
printId("noun");
// printId(false);
function print(id: number | string) {
  //   console.log(id.toUpperCase());
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
