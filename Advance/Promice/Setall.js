let prom1 = Promise.resolve("first resolve");
let prom2=Promise.resolve("second resolve");
let prom3=Promise.resolve("first reject");
let prom4=Promise.reject("second reject");
/**
 * it will return the status of all the promices whether it is resolved or rejected
 * it will not shortcircuit like all or any
 * 
 * it will return array of objects with status and value/reason
 * 
 *
 */

Promise.allSettled([prom1,prom2,prom3,prom4])
.then((v)=>{
    console.log(v);
    
}).catch((e)=>{
    console.log(e);
})