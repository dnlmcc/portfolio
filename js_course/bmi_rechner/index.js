"use strict";

function run() {
    console.log("Nachricht 1");
    console.log("Nachricht 2");
}

run();

let run1 = function(x) {
    console.log("1: " + x)
}



let sum = function (x, y) {
    return x + y;
}

let result = sum(1,2);
console.log(result); 

run1("Das ist mit Parametern berechnet: " + result);