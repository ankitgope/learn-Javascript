const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body=document.querySelector('body');

buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(event){
console.log(event);
console.log(event.target);
if(event.target.id === 'blue'){
    body.style.backgroundColor= event.target.id  // we can directly write blue
}
if(event.target.id === 'white'){
    body.style.backgroundColor= event.target.id  // we can directly write white
}
if(event.target.id === 'yellow'){
    body.style.backgroundColor= event.target.id  // we can directly write yellow
}
if(event.target.id === 'grey'){
    body.style.backgroundColor= event.target.id  // we can directly write grey
}
  });
});