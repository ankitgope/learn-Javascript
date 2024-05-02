// this will delay the output 

function chese(callback){
    setTimeout(()=>{
        const chese="🧀"
        console.log("find this chese"+chese);
        callback(chese);
    },3000);
    
}
chese(()=>{
    console.log("this the chese");
});