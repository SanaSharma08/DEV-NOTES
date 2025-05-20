console.log("I am a tutorial on loops");

// For loop

// let a=1;
// for(let i=0;i<100;i++){
//     console.log(a+i);
// }


let obj={
    "name":"sana",
    "role":"sde"
}

// for in loop

for (const key in obj) {
    const element = obj[key];
    console.log(key , element);
}

// for of loop

for (const element of "harry") {
    console.log(element);
}

// while loop

let a=5;
while(a<10){
    console.log(a);
    a++;
}


let s=0;
do {
    console.log(s);
    s++;
} while (s<0);