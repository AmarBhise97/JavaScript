const prom=new Promise((resolve,reject)=>{


let v=100;
setTimeout(() => {
    

    if(v>10){
        return resolve("resolved promice");
    }


    else{
        return reject("reject promice");
    }
    }, 5000);
})
// console.log(resolve(9));
// console.log(reject(9));

prom.then((v)=>{
    console.log(v);
    
}).catch((e)=>{
    console.log(e);
});
console.log(prom);
setTimeout(() => {
    console.log(prom);
}, 2000);


