interface V {
  func(a: number, b: number): number;
}
class two implements V {
  func(a: number, b: number) {
    return a + b;
  }
}

class three extends two {
  arr(val: Array<number>) {
    return val[0];
  }
}
const objects = new three();
objects.func(45, 69);
objects.arr([1, 2, 3, 4, 5]);
