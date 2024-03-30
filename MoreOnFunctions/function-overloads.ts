function getFunctionOverload(a: number, b: number): number;
function getFunctionOverload(a: string, b: string): string;
function getFunctionOverload(c: any, v: any): any {
  if (typeof c === "number" && typeof v === "number") {
    return c + v;
  } else if (typeof c === "string" && v === "string") {
    return c + v;
  } else {
    console.error("Invalid arguments");
  }
}
getFunctionOverload("f", "f");

getFunctionOverload("f", "f");
getFunctionOverload(8, 5);
getFunctionOverload("f", "f");

// writing good overloads
function len(a: string): number;
function len(b: string[]): number;
function len(v: any): number {
  return v.length;
}

//non overvalued function
function lens(x: any[] | string) {
  return x.length;
}
