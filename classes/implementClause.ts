interface V {
  func(a: number, b: number): number;
}
class data implements V {
  func(a: number, b: number) {
    return a + b;
  }
}
const dataS = new data().func(95, 45);
