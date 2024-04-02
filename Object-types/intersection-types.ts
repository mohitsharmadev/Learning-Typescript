interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
const clg: ColorfulCircle = {
  color: "kl",
  radius: 56,
};
