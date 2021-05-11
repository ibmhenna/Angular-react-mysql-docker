const numbers :number[] = [4,6,-1]
//numbers.push('1');
const sum=numbers.reduce(function(previous,current){
return previous+current;
})

console.log(sum);

//--------sorting
// numbers.sort(function (number1:number, number2:number){
//     return number1-number2;
// })
// console.log(numbers);

//----------map, increase all numbers by some value
const updateNumbers = numbers.map(function(element){
    return element+10;
})
console.log(updateNumbers);
