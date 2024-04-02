interface Property {
  name: string;
  age: number;
}
const extraObjectProperty: Property = {
  name: "mohit",
  age: 45,
  //spread operator used for add extra property of object
  ...{ email: "mohit@gmail.com" },
};
console.log(extraObjectProperty);
