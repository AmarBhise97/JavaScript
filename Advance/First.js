function fun(){
    let name ="Amar";
    function fun2(){
        console.log(name);
        
    }
    return fun2;
}

let mm=fun();
mm();