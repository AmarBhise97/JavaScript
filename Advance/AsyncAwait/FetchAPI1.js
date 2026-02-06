




function getData(){
    fetch("http://localhost:9090/studentcontroller/getallstudent").then((r)=>{
        return r.json();    
    }).then((r)=>{
        console.log(r);    
    }           
    ).catch((e)=>{
        console.log(e);

    });

};

function Demo(){
    console.log("hiiii");
    
}




