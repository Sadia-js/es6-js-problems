const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisible1 = numbers.filter(numb => numb % 10 === 0);
console.log(divisible1);

const divisible2 = numbers.find(numb => numb % 10 === 0);
console.log(divisible2);