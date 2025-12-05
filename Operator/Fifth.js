/**
 * Scope : Global,Local,Block level Scope.
 * let,const : global block , function level.
 * var : Global , Function.
 * 
 */
//console.log(name3);// thad is undefined.
console.log(name3);// name 3 is not  defined.
console.log(name2);// name2 is not defined.


if(true)
{
    /**
     * Block level
     */
    let name ="ABC";
    const name2 ="AMAR";
    var name3 = "Ankit";
    console.log(name,name2,name3);
}
//console.log(name);//let using let not call the out of block
//console.log(name2);//const using const not call the out of block.
console.log(name3);//only var using can call out of block.i.e var is not a block level .