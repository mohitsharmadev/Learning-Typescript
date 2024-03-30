"use strict";
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
const av = multiply(10, 1, 2, 3, 4);
