let Employee={
    "Name":"John",
    "age":30,
    "city":"New York",
    "country":"USA",
    "department":"Sales"



};
//Object.freeze(Employee);
delete Employee.department
Employee.salary=50000
Employee.department="Marketing"
console.log(Employee);
