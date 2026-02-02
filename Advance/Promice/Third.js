
let num ="2345324567";
const prom=new Promise((res,rej)=>{

    setTimeout(() => {
       if(num.length===10){
        return res("valid number");
       }
       else{
        return rej("invalid number");
       }
    }, 3000);
})

function print(v){
    console.log(v);
    
}
prom.then(print).catch(print);

setTimeout(() => {
   console.log(prom);
    
}, 10000);