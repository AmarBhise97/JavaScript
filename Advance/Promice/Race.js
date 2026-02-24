const p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        return res("pass");
    }, 7000);
})
/**
 * race will return the first fullfilled or rejected promise
 * race will shortcircuit like all and any
 */

const p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        return rej("fail");
    }, 6000);
})
Promise.race([p1,p2])
.then((v)=>{
    console.log(v);
    
}).catch((e)=>{
    console.log(e);
})