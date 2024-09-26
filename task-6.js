const instructors = [
    {name: 'Nodi', age: 28, position: 'senior'},
    {name: 'Akil', age: 26, position: 'junior'},
    {name: 'Shobuj', age: 30, position: 'senior'}
]

const seniors = instructors.filter(instructor => instructor.position === 'senior');
console.log(seniors); 