let Student={
    "Name":"Alice",
    "age":20,
    "city":"Los Angeles",           

};
Object.seal(Student);
delete Student.Name;//using seal we cant delete the property

Student .marks=78;//using seal we cant add new property

Student.age=21;//using seal we can modify the property

console.log(Student);
