//Unknown
let assignUnknownType: unknown;
assignUnknownType = 41;
let assignAnyType: any;
assignAnyType = "hello";

//when assign type to unknown it throw error

// let anotherVariable: number = assignUnknownType;

//any type can not throw error when assign to other variable
let otherVariable: string = assignAnyType;
