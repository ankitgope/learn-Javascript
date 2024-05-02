//EXAMPLE OF A CALLBACK FUNCTION
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function callMe() {
  console.log("I am a callback function");
}

greet("Ankit", callMe);

// CALL BACK HELL
// this below part we can see a nesting of call back which make it hard this part is CALL BACK HELL
// getChees((animal) => {
//     console.log("i got the chese");
//     makeDough(animal, (doughAnimal) => {
//       console.log("i got the dough");
//       makePizza(doughAnimal, (pizzaAnimal) => {
//         console.log("making the pizza");
//       });
//     });
//   });

//EXAMPLE

//here we are using callback passing a function name as a argument can be any suppose "callback"
function getChees(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("here is the chese" + cheese);

    //return cheese;  //so after we execute the settimeout function we need to write some thing spo we are returning the chesse
    // but this return statement will not work it will give output as undefined. **so here we need to use callback **

    // here is the thing we are call backing the cheese part ie i have send some one to find cheese
    // passing the value in the function above  callback in "getChees(callback)" this will get the cheese(const cheese= "🧀";console.log("here is the chese"+cheese);)
    //in above two lines and when i will get it i will call back it
    // passing the cheese(LIKE WE WANT CHEESE SO WE PASSED CHESE ) in here in callback which eill connect with (animal)=> this line
    //when this execute it will get the value "i got the chese"
    //
    callback(cheese);
  }, 3000);
}
// this function will need the cheese so we are using chese here for making the dough
// and a callback function to work like above
function makeDough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + " here is the dough🧁";
    console.log("the dough is getting ready", dough);
    callback(dough);
  }, 3000);
}
function makePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "pizza 🍕";
    console.log("here is the pizza");
    callback(pizza);
  }, 3000);
}

// calling the function to get the vaue for thet i need to pass the value of callback function like passing the argument
// inside the annoymous we will pass the cheese which will be provided callback(cheese); generally this line is connecting this  callback(cheese);
// its like passing the argument to callback(cheese); <- this line  this
//animal -> is just a name or we can say argument it can be any name
getChees((animal) => {
  console.log("i got the chese");
  //now we want to make a dough with this chese so we are executing it inside the chese function
  // the funcation have two values which is cheese and the callback function
  // here the name of the callback  alwas have to same or else it will give error getCheese((animal) makeDough(animal, this tqo name have to be same
  // and the makePizza(doughAnimal, hase to be same as we getting it through callback function
  makeDough(animal, (doughAnimal) => {
    console.log("i got the dough");

    makePizza(doughAnimal, (pizzaAnimal) => {
      console.log("making the pizza");
    });
  });
});
