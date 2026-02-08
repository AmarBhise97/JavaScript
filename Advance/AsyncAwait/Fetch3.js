
async function getdata(){
  let add = await  fetch("http://localhost:9090/schoolcontroller/getall");
   let get= await add.json();
    console.log("This is API's");
    
   console.log(get);
   

}
getdata();


async function adddata(){
    let data={
        
    "schoolname":"DY patil",
    "schoolmobile_no":"8967454590",
    "address":"pune"
    };
   let res=await  fetch("http://localhost:9090/schoolcontroller/addall",{
    method:"POST",
    
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
    
   });
   res.json().then((r)=>{
    console.log(r);
   });
}
adddata();



                



