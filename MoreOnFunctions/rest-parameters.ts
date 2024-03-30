function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
const av = multiply(10, 1, 2, 3, 4);
