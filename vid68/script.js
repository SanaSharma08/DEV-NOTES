console.log("harry !")
// let hr=document.getElementsByClassName("box");
// console.log(hr);

// hr[2].style.backgroundColor="red";
// document.getElementById("red").style.backgroundColor="red";

//only targets the very first element with matching classname
document.querySelector(".box").style.color="red";

// returns a nodelist of all nodes having class .box
let b=document.querySelectorAll(".box");
// console.log(b);
// we iterate through the nodelist with loops like we do for arrays
b.forEach(e => {
    e.style.backgroundColor="pink";
})


let nn=document.getElementsByName("ab");
// console.log(document.getElementsByName("ab"));
nn.forEach(e => {
    e.style.color="blue";
})

let k=document.getElementsByTagName("div");
k[4].matches("#red"); //returns true
k[4].matches("#red"); //returns false