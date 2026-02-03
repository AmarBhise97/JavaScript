let num ="12";

const prom = new Promise((res,rej)=>{
    setTimeout(() => {
        if(num==12){
            return res(("Correct value"));
        }
        return rej("Incorect value");
    }, 2000);


});
// prom.then((v)=>{
//     console.log(v);
    
// }).catch((e)=>{
//     console.log(e);
    
// })
async function pppppp(){
    try{
        let re = await prom;
        console.log(re);
        
        
    }
    catch(e){
        console.log(e + "EEEEU");
        
    }
}
pppppp();