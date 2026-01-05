function Demo(){
    return 10+20;
}
function Demo2(v){
    return v()+2;

}
console.log(Demo2(Demo));
