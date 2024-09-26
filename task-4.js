const oddNumbs = [1, 3, 5, 7, 9];
// show output a new array of even numbers

// using map
const evenNumbs = oddNumbs.map(num => num + 1);
console.log('Using map:', evenNumbs);

// using for loop
let evenArray = [];
for(let odd of oddNumbs){
    odd += 1;
    evenArray.push(odd);
}
console.log('Using for loop:', evenArray);