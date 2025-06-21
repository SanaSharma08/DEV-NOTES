// // PART A : reduce method & arrays 

// let a=prompt("Enter a number: ");
// let arr=[];
// while(a>0){
//     arr.push(a);
//     a--;
// }
// //[1,2,3,4,5]
// let fac = (a,b) =>{
//     return a*b;
// };
// console.log(arr.reduce(fac));

// // PART B : Using for loops

// let b=prompt("Enter a number: ");
// let fact=1;
// for(let i=b ; i>0;i--){
//     fact=fact*i;
// }
// console.log(fact);

// // using arrow function

// let ft = (x) =>{
//     let temp=1;
//     while(x>0){
//         temp=temp * x;
//         x--;
//     }
//     return temp;
// }
// let v=prompt("Enter number: ");
// let result = ft(v);
// console.log(result);
// console.log("hiii");

// // for of loop 
// let v=prompt("ENTER NUM: ");
// let arr=[];
// while(v>0){
//     arr.push(v);
//     v--;
// }
// let fact=1;6
// for (const element of arr) {
//     fact=fact*element;
// }
// console.log(fact);

// // for each loop

// let v=prompt("ENTER NUM: ");
// let arr=[];
// while(v>0){
//     arr.push(v);
//     v--;
// }
// let fc=1;
// arr.forEach(element => {
//     fc=fc*element;
// });
// console.log(fc);