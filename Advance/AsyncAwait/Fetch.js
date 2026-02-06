


fetch("http://localhost:9090/schoolController/getall").then((v)=>{
   return  v.json();
    
})
.then((v)=>{
   console.log(v);
   v.companyid.forEach((emp)=>{
       console.log(emp);
   });
    
}).catch((r)=>{
    console.log(r);
    
})