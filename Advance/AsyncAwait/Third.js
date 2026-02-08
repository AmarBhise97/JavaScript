
async function adddata(){
    let data={
        "username":"ghiosh",
        "user_number":"9078900968"
    };
   let res=await  fetch("http://localhost:9090/addalluser",{
    method:"POST",
    
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
    
   });
   res.json().then((r)=>{
    console.log(r);
   });
}



