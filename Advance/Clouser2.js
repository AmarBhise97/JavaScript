function Demo(){
    let name1 = "Amar";
    function Demo2(){
        let name = "krtut";
        
        console.log(name1);
        function Demo3(){
            console.log(name);

        }
        return Demo3;
    }
    return Demo2;
}

let fn = Demo();
let fn2 = fn();
fn2();  