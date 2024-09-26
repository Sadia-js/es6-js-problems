const people = [
    {name: 'Meena', age: 20},
    {name: 'Rena', age: 15},
    {name: 'Suchi', age: 22},
]

// Using Reduce method
const total = people.reduce((accumulator, current) => accumulator + current.age , 0);
console.log(total);



// Using for loop
let sum = 0;
for(const ppl of people){
    const age = ppl.age;
    sum += age;
}
console.log(sum);