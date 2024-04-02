interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface Extra {
  id?: number;
}
//extend keyword
interface Feature extends BasicAddress, Extra {
  numbers: number;
}
const extendMethod: Feature = {
  street: "gh",
  city: "df",
  country: "mk",
  postalCode: "fh",
  numbers: 45,
};
