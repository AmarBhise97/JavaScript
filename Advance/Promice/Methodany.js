let prom1 = Promise.resolve("first resolve");
let prom2=Promise.resolve("second resolve");
let prom3=Promise.resolve("first reject");
let prom4=Promise.reject("second reject");
/**
 * ifany condition is resolve then it will be resolve
 * if all are reject then only it will be reject
 */

Promise.any([prom1,prom2,prom3,prom4])
.then((v)=>
    {
        console.log(v);
        
    }).catch((e)=>{
        console.log(e);
        
    });