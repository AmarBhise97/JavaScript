let Student={
    "Name":"Alice",
    "age":20,
    "city":"Los Angeles",           

};
Object.seal(Student);
delete Student.Name;;
Student .marks=78;
Student.age=21;
console.log(Student);
