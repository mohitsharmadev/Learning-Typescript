"use strict";
function object(pt) {
    console.log(`the object properties ${pt.n}`);
    console.log(`the object properties ${pt.z}`);
}
object({ z: 45, n: false });
object({ z: 45 });
function pName(obj) {
    var _a;
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
pName({ first: "hello" });
