class point {
  x: number;
  y: number;
  constructor(x: string, yy: string) {
    this.x = x.length;
    this.y = yy.length;
  }
}
const p1 = new point("kjk", "jk");
console.log(p1.x);
console.log(p1.y);

// //overloads
// class ints {
//   add: number | string;
//   constructor(x:number,y:string);
//   constructor(z:string);
//   constructoR
// }
