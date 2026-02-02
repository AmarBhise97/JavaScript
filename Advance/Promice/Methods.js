let prom1 = Promise.resolve("first resolve");
let prom2=Promise.resolve("second resolve");
let prom3=Promise.resolve("first reject");
let prom4=Promise.reject("second reject");
/**
 * if any one condition is reject then all will be reject
 * if all are resolve then only it will be resolve
 */

Promise.all([prom1,prom2,prom3,prom4])
.then((v)=>{
    console.log(v);
}).catch((e)=>{
    console.log(e);
    
})