function getOptionalFunctionParameter(a?: number) {
  return a;
}

getOptionalFunctionParameter();

//optional parameter in  callbacks
function getOptionalFunctionParameterWithCallback<type>(
  arr: type[],
  callback: (num: type, index?: number) => void
) {
  for (let i = 0; (i = arr.length); i++) {
    callback(arr[i], i);
  }
}
getOptionalFunctionParameterWithCallback([1, 2, 3, 4, 5, 6], (a) => {
  console.log(a);
});
getOptionalFunctionParameterWithCallback([1, 2, 3, 4, 5, 6], (a, i) => {
  console.log(a, i);
});
