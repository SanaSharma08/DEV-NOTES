// The Mirror Mirror. Irpagine you have a string. and you need to create a new string that is a mirror
// image of the original. Write a function that appends the reversed version of the original string to
// itself. MirrorrorriM

function mirror(str){
    let newstr=str.split("").reverse().join("");
    return str+newstr;
}
let m=mirror("Mirror");
console.log(m);