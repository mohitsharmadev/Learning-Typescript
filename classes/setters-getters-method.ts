//get - to define a getter method to get the property value
// set - to define a setter method to set the property value
//If get exists but no set, the property is automatically readonly
class GetSetMethod {
  length = 5;
  get getMethod() {
    return this.length;
  }
  set setMethod(value: any) {
    this.length = value;
  }
}
const go = new GetSetMethod().getMethod;
// go.setMethod = 10;
