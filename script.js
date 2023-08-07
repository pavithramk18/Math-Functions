console.log("Hi Welcome to Java Script Basic coding");

//Math floor method
console.log(Math.floor(8.9));  //8
console.log(Math.floor(-6.2)); //7
console.log(Math.floor(6.1));  //6

//Math Ceil method

console.log(Math.ceil(8.9));  //9
console.log(Math.ceil(2.1));  //3
console.log(Math.ceil(-8.9)); //8

//Math round method

console.log(Math.round(77.9)); //78
console.log(Math.round(-75.9));  //76
console.log(Math.round(77.2)); //77

//Math square root method

console.log(Math.sqrt(0)); //0
console.log(Math.sqrt(9));  //3
console.log(Math.sqrt(-4));  //NaN== Error

//Math Cube root method

console.log(Math.cbrt(0)); //0
console.log(Math.cbrt(125)); //5
console.log(Math.cbrt(-8));  //-2

//Math Absolute method

console.log(Math.abs(-5.2)); //5
console.log(Math.abs(-3.5)); //3
console.log(Math.abs(-9.8)); //9
console.log(Math.abs(12.1)); //12

//Math Trunc Method

console.log(Math.trunc(2.2)); //2
console.log(Math.trunc(6.2));  //6
console.log(Math.trunc(-3.9)); //3

//Math Min Method

console.log(Math.min(2,9,88,7,22.4,-90,-890)); //-890

//Math Max method

console.log(Math.max(66,88,66890,0,-99,23,-877)); //66890

//Math Power Method

console.log(Math.pow(2,5));  //32  (2*2*2*2*2)
console.log(Math.pow(5,5));  //3125
console.log(Math.pow(3,2)); //9

//Math Random Method
//It generates a random number with some digits of decimal point

console.log(Math.random()*2); //from 1 to 2 0.23386700514487924
console.log(Math.random()*8);  //from 1 to 8 7.044141891251639
console.log(Math.random()*6);  //from 1 to 6   4.451217497531671

//Some chaining of math methods

console.log(Math.trunc(Math.random()*9));

console.log(Math.pow(Math.floor(2,5)));





















