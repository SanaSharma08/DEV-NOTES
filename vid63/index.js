// JAVASCRIPT ARRAYS

let arr=[1,2,3,4,5,7];
console.log(arr);
console.log(typeof arr); // type of array in js is object
console.log(arr.length); //length of array
let s= arr.toString(); // converting array to a coma seperated string
console.log(typeof s); // operations on this coma seperated string 
console.log(s.length); // = 11 here
for (const val of s) { 
    console.log(val);
}
// prints 
// 1
// ,
// 2
// ,
// 3
// ,
// 4
// ,
// 5
// ,
// 7

// Array Join
let joining = arr.join(" & ");
console.log(joining);

// Popping from an array

console.log(arr.pop()); 
// or
let popped=arr.pop();
console.log(popped);

//Pushing element in array : pushes element at the end
let n=[1,2,3,4,8];
console.log(n.push(10));
console.log(n); 

//shift()
console.log(n.shift()); 
console.log(n); 

//unshift()

let ushft="say";
console.log(n.unshift(ushft));
console.log(n); 

//delete
delete n[3]; // deletes element at 3rd index
console.log(n); 

//concat(): returns new array and does not update existing arrays.
let a1=[1,2,3];
let a2=[4,5,6];
let a3=[9,8,7];
let newa=a1.concat(a2,a3);
console.log(newa);
console.log(a1);
console.log(a2);
console.log(a3);

//sorting
let s1=[23,44,1,90,55,78];
console.log(s1.sort());
console.log(s1);
let news1=s1.toSorted();
console.log(news1);

//splicing
let s2=[1,2,3,4,5,6];
console.log(`original s2 length: ${s2.length}`);
console.log(s2.splice(2,1,23,24));
console.log(s2);
console.log(`modified s2 length: ${s2.length}`);

//slicing : does not modify original array, returns a new array
let s3=[1,8,89,10,44,56,77];
console.log(s3.slice(2));
console.log(s3.slice(1,3));
console.log(s3);

//reverse() : modofies original array
console.log(s3.reverse());
console.log(s3);