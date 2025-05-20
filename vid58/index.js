function greet(name){
    console.log("HEY " + name + ", nice to meet you!");
}

greet("cheeku");


// Default value in arguments

function sum(a,b,c=3){
    return a+b+c;
}
let x=sum(3,5);
let y=sum(3,5,1);
let z=sum(3);

console.log(x);
console.log(y);
console.log(z);

