let Employee={
    "Name":"John",
    "age":30,
    "city":"New York",
    "country":"USA",
    "department":"Sales"



};
Object.freeze(Employee);
delete Employee.department//  using freeze we cant delete the property

Employee.salary=50000//using freeze we cant add new property

Employee.department="Marketing"//using freeze we cant modify the property

console.log(Employee);
