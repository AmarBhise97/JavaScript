let Student={};

Object.defineProperty(Student,"Name",{
    "name":{
    value:"Amar",
    enumerable:true
},
"age":{
    value:20,
    enumerable:true 
}
});
console.log(Student);
console.log(Object.getOwnPropertyDescriptor(Student));