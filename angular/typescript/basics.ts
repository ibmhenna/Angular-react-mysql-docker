// let a=1;// implicit datatype
// //let a:number=1;//explicit
// //a=true;
// let b;
// b=12;
// const firstname:string = 'John';

function add(a:number, b:number=10):number{
    return a+b
}

const result = add(2,3);
console.log(result);
//add('2',3);
// const divide=(a:number,b:number)=>a/b;
// console.log(divide(4,2));


// function math(callback:Function, a, b){
//     return callback(a,b);
// }

// console.log(math(add, 2,4));s