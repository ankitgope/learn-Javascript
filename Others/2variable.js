var myBoolean = true;
console.log(myBoolean);

var myString= 'hello world';
console.log(myString);

var number=20;
console.log(number);

var secondNumber=40;
console.log(secondNumber)

secondNumber=80;
console.log("the second updated",secondNumber);

var array=[myBoolean,myString];
console.log(array);


const object = {
    firstPorperty: array,
    sumProperty:number+secondNumber

};
console.log(object);
console.log(object.sumProperty);

const firstprop = object.firstPorperty;
const newfrirstProp =firstprop[0];
console.log(newfrirstProp);