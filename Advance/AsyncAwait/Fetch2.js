 

 async function getorder(){
   let data=await fetch("http://localhost:9090/getorder");
   let ddd= await data.json();
   console.log(ddd);
   
 }
 getorder();