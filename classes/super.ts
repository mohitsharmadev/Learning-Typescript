class Base {
  k = 4;
}
class Case extends Base {
  constructor() {
    super();
    console.log(this.k);
  }
}
