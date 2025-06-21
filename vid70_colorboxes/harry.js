let boxi=document.querySelectorAll(".box");
console.log(boxi);
let arr = Array.from(boxi)
console.log(arr);
function colorbox(){
    let min=0;
    let max=255;
    let num1 = Math.ceil(Math.random() * (max - min + 1)) + min;
    let num2 = Math.ceil(Math.random() * (max - min + 1)) + min;
    let num3 = Math.ceil(Math.random() * (max - min + 1)) + min;
    var color=`rgb(${num1} , ${num2} , ${num3})`;
    return color;
}

arr.forEach(e => {
    e.style.color=colorbox();
    e.style.backgroundColor=colorbox();
});