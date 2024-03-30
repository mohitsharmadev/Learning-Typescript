function getFunctionInsideFunction<type>(
  s: type[],
  func: (value: type) => void
): type[] {
  return s;
}

getFunctionInsideFunction([1, "hello"], (value) => {
  console.log(value);
});
