fetch("http://localhost:9090/Employeecontroller/getemp").then((v)=>{
   return  v.json();
    
})
.then((v)=>{
   console.log(v);
   v.companyid.map((e)=>{
       console.log(e);
   });
    
}).catch((r)=>{
    console.log(r);
    
})