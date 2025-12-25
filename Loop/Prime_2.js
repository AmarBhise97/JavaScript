
var count =0;
var sum =0;

for(var v=2;v<100;v++){

    if(v==2){
        count++;
        console.log(v);
       // sum = sum+v;
       // console.log(sum);

        
        


    }
    else{
        flag =false;
        for(var a=2;a<v;a++){
            if(v%a==0){
                flag = true
            }
        }
        if(flag!= true){
            sum = sum+v;
            count++;
            console.log(v);
            

        }
    }
}
console.log("Total Prime :" +count);
console.log("Sum : "+sum);

