let obj={
    Name:"John",
    age:30, 
    city:"Chicago",

}
Object.defineProperty(obj,"city",{
    value:"New York",
    enumerable:true,
    configurable:true,
    writable:false
})
console.log(obj);
delete obj.city;//configurable is false so we cant delete the property
console.log(obj);

obj.city="Latur";
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,"city"));//to get the property descriptor of the property

