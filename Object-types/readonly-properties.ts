interface Readonlyproperty {
  readonly prop: number;
}
function getReadonlyPropertyValue(home: Readonlyproperty) {
  console.log(`this is readonly property ${home.prop}`);

  //Cannot assign to 'prop' because it is a read-only property.
  // home.prop=445;
}
