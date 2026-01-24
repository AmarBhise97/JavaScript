


function * printer(){
 
    for(v=1;v<5;v++){
        
        
        yield v;
    }
}
const get=printer();

for(let i=1;i<10;i++){
    console.log(get.next());
    
}