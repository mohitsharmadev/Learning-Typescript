//interface
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
interface Feature extends BasicAddress, Extra {}

//intersections
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircles = Colorful & Circle;
