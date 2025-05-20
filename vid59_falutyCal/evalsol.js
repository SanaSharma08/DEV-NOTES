let random=Math.random();
//takes input from pop up
let a=prompt("Enter 1st number: ");
let b=prompt("operator: ");
let c=prompt("Enter 2nd number: ");

let obj = {
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
};

if(random>0.1){
    //correct calcuation 
    //puts result in console
    console.log(`The is the result: ${eval(`${a} ${b} ${c}`)}`);
    //puts result in pop up
    alert(`The is the result: ${eval(`${a} ${b} ${c}`)}`);
}
else{
    //changing b to value of b key from obj
    b=obj[b];
    console.log(`The is the result: ${eval(`${a} ${b} ${c}`)}`);
    //puts result in pop up
    alert(`The is the result: ${eval(`${a} ${b} ${c}`)}`);
}

