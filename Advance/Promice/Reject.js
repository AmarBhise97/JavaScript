let prom = Promise.reject("not the fullfillrd");
prom.catch((v)=>{
    console.log(v);
    
});
