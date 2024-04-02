class MyClass {
  [key: string]: number;
  constructor(num: string) {
    this.key = num.length;
  }
}
const b1 = new MyClass("hello");
b1["gh"] = 85;
