class Point {
  x: number;
  y: number;
}
const pl = new Point();
pl.x = 4;
pl.y = 6;

class Fields {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const p2 = new Fields("rah");
