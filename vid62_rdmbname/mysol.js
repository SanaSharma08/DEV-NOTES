
let adjectives = {
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
};

let shop = {
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

let other = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

//n=number of keys in that object

function businessName(ob1,n){
    let min=1;
    let max=n;
    //calculating a random number b/w max & min i.e tottals number of keys in object
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    let word=ob1[random];
    return word;
}

let w1=businessName(adjectives,3);
let w2=businessName(shop,3);
let w3=businessName(other,3);

console.log(`The random Business Name is: ${w1} ${w2} ${w3}`);