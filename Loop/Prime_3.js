var count =0;
for(var num =2;num<2000;num++){
    if(num ==2){
        count++;
    }
    else{
        var flag =false;
        for( var v=2;v<num;v++){
            if(num%v==0){
                flag =true;

            }
           

        }
        if(flag !=true){
            count++
        }

    }
}
console.log("Totel number of prime : "+ count);
