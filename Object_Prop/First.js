let obj={
    "Name":"Amar",
    "age":"22",
    "city":"Pune",
    "country":"India"

};
console.log(obj);
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));
console.log("---------------------------------------------------");

let obj2={
    "number":112345677653
};

// console.log(obj2);
// Object.assign(obj2,obj)
// console.log("****************************************************************");

// console.log(obj2);

console.log("===================================================================");
Object.assign(obj2,{Name:"aname",age:45,city:"New York",country:"USA",pincode:3456},obj);
console.log(obj2);



