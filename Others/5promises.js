const ticket = new Promise(function(resolve,reject){
const isBorarding= true;
if(isBorarding){
    resolve("FLIGHT CHECK---> OK , BOARDING NOT YET STARTED");
}else{
    reject("YOUR FLIGHT IS CANCELLED");
}
});

// the const ticket is a object for promise 
// here the ticket function is callbacking the promise feature function which is connected via (data) argument 
// and for then tha data is connecting to resolve & for catch the data is connecting to reject 
// finally will work every time mandatory  
ticket
    .then((data) => {
        console.log("whoo",data);
    })
    .catch((data)=>{
        console.log("oh no",data);
    })
    .finally((data)=>{
        console.log("i will execute always");
    })
// real life example used in the call back  hell

