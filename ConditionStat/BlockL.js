/**
 * Scope:
 *        1.Global
 *        2.Block level
 *        3.Function
 * 
 * let ,const==> Bolck level,Global,Function level
 * var ==> Global,Function level
 */
if(true){
    /**
     * Block level
     */
    let number =10;
    const number1=49;
    var number3=59;
}
//console.log(number);==>let......number is not deffined
//console.log(number1);==> const... number1 is not deffined
console.log(number3);/**if perficatly work only var */


