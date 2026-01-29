function SBI(z){
    let bankbalance=z;
    function Checkbalance(){
        console.log("Avaialable balance is");
        console.log(bankbalance);
        
    }
    function Deposite(m){
        console.log("deposite");
        bankbalance=bankbalance+m;
        console.log("new balance : "+bankbalance);
        
        
    }
    function Withdraw(w){
if(bankbalance<w){
    console.log("insufficient balance");
}
else{
bankbalance=bankbalance-w;
console.log("Amount withdrawl : "+w);
console.log("Current Balance :"+bankbalance);
}

    }
    return[Checkbalance,Deposite,Withdraw];
}
let[fn1,fn2,fn3]=SBI(1000);
fn1();
fn2(1000);
fn3(500);
