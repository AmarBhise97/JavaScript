function alertwidth() {
    console.log("Screen");
    console.log(screen.width);
    console.log(screen.height);
    console.log(screen.availWidth);
    console.log(screen.colorDepth);
    console.log(screen.availHeight);

    console.log("Location");
    console.log();

    console.log(location.hostname);
    
    console.log("----------------------------------------------------------------------------");
}
    function reload() {
      //  location.reload();
        console.log(localStorage.reload);
        alert("Page is reloaded");
        
    }

    function open() {
        //location.reload();
       // window.open("https://www.google.com/");
       //location.replace("https://www.google.com/");
      
       location.assign("https://www.google.com");
    }
    // function assign() {
    //     location.assign("https://www.google.com/");
    
    
    // }
   
    function ASSIGN() {
        location.replace("https://www.google.comS");
       // location.assign("https://www.google.com");
    }   
    

    function Navigator() {
        navigator.clipboard.readText().then((v)=>{
            console.log(v);

        }).catch((e)=>{
            console.log(e);
            
        })
        if(navigator.onLine){
          alert("you are online");

        }
        else{
            alert("you are offline");

        }
}

