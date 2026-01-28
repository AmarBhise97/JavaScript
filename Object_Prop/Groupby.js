let arr=[10,20,1,40,51];
function fun(i){
    if(i%2==0){
        return "Even";
    }
    return "Odd";

}

Object.groupBy= function(arr,fun){
    let result={};                              
    for(let i of arr){
        let key=fun(i);
        if(key in result){
            result[key].push(i);
        }




        else{
            result[key]=[i];queueMicrotask  
        }
    }
    return result;
}
console.log(Object.groupBy(arr,fun));
