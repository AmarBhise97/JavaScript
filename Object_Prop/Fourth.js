let Student={
    "Name":"Bob",
    "age":22,
    "city":"New York",      

}
Object.seal(Student);//it prevents adding or deleting properties but allows modification of existing properties
Object.freeze(Student);//it prevents adding, deleting, or modifying properties
console.log(Object.isExtensible(Student));//to check whether object is extensible or not
console.log(Object.isSealed(Student));//to check whether object is sealed or not
console.log(Object.isExtensible(Student));
console.log(Object.isFrozen(Student));//to check whether object is frozen or not

