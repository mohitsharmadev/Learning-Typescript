class addition {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(x: number, y: number) {
    return x + y;
  }
}
const p11 = new addition(4, 5).add(55, 66);

//second example
class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
  //This is a function for a class and then creates that class object
  static createFromDiameter(diameter: number): Circle {
    const radius = diameter / 2;
    return new Circle(radius);
  }
}
const circle = Circle.createFromDiameter(5);
circle.calculateArea();
