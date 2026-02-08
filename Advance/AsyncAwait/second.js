let counter=0;

while(counter<50){
    console.log(counter);
    counter++;
}

function DDL(){
    console.log("hi....");
   console.log(document.getElementById("1").value);
   
    
}

 async function Demo(){
   let arr=await fetch("http://localhost:9090/getall");
let data=await arr.json()
console.log(data);

}
Demo();

console.log("==============================================================================");


function thancatch(){
    fetch("http://localhost:9090/getall").then((r)=>{
        return r.json();
    }).then((r)=>{
        console.log(r);
        
    }).catch((e)=>{
        console.log(e);
        
    })

};

thancatch();
