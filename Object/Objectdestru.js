let obj={
    phone:78765768975,
    name:"Amar",
    city:"Latur",
    pincode:"2346732",
    arr:[10,20,30,40,50,60]



}
let{ phone,name,city,pincode=3456,arr}=obj;
console.log(city);
console.log(pincode);
console.log(arr[3]);


