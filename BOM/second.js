function Navigator(){
    navigator.clipboard.readText().then((v)=>{
        console.log(v);
    }).catch((e)=>{
        console.log(e);
    }       
    )
    if(navigator.onLine){
        alert("you are online");
    }
    else{
        alert("you are offline");
    }


}

function TrackLocation(){
    navigator.geolocation.getCurrentPosition((p)=>{
       console.log(p.coords.latitude);
         console.log(p.coords.longitude);
         console.log(p.coords.heading);
         console.log(p.coords.speed);
         console.log(p.timestamp.toLocaleString());

           
    },(e)=>{
        alert("Please allow location access");
    }) 
}


function TrackLocationwatch(){
  let id=  navigator.geolocation.watchPosition((p)=>{
        console.log(p.coords.altitude);
        console.log(p.coords.longitude);
        console.log((p.coords.latitude));
        console.log(p.coords.heading);

      console.log(id);
        
        
        navigator.geolocation.clearWatch(id);
        
    },(e)=>{});
}