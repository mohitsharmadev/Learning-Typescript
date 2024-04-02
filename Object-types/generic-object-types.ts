interface GenericObject<type> {
  contents: type;
}
const object: GenericObject<string> = {
  contents: "str",
};
