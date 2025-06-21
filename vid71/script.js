console.dir(document.body.getElementsByClassName("container"));
console.log(document.body.querySelector(".container").tagName);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").textContent);
// document.querySelector(".container").hidden = true;
console.log(document.querySelector(".container").hidden);
document.body.querySelector(".box").innerHTML="hey";


//Attribute Methods
console.log("Attribute Methods:-")
let elem=document.body.querySelector(".box");
//1
console.log(elem.hasAttribute("name"));
//2
console.log(elem.getAttribute("name"));
//3
console.log(elem.setAttribute("id","1122"));
console.log(elem.getAttribute("id")); // testing setAttribute
console.log(elem);
//4
console.log(elem.removeAttribute("id"));
console.log(elem); // testing removeAttribute
//5
console.log(elem.attributes);


// data - * attributes
console.log(document.querySelector(".box2").dataset);
console.log(document.querySelector(".box2").dataset.createdby);


//Insertion 

let div=document.createElement('div');
div.className="alert";
div.innerHTML="<span>HIIII</span>";
div.style.backgroundColor="beige";
div.style.border="2px solid black";
document.body.querySelector(".container").append(div);

// append like functions for insertion:
document.body.querySelector(".container").style.border="2px solid red";
console.log(document.body)

// document.body.querySelector(".container").append(div);
// document.body.querySelector(".container").prepend(div);
// document.body.querySelector(".container").before(div);
document.body.querySelector(".box3").replaceWith(div); 


//insertAdjacent Method
// const boxi = document.getElementById("box");
document.getElementById("box").style.border="2px solid yellow";
box.insertAdjacentHTML('afterbegin', '<p> I came through insertAdjacentHTML (I was selected via id)</p>');
const newPara = document.createElement("p");
newPara.textContent = "I'm a paragraph";
box.insertAdjacentElement("beforeend", newPara);
box.insertAdjacentText("beforebegin", "I came through insertAdjacentText 😀 (I was selected via id)");
//trying inserrtAdjacent via queryselector
let classybox=document.querySelector(".box");
classybox.style.backgroundColor="pink";
classybox.insertAdjacentHTML('afterbegin', '<p>I came through classybox i.e via class name instead of id (afterbegin)</p>')
classybox.insertAdjacentHTML('afterend', '<p>I came through classybox i.e via class name instead of id (afterend)</p>')

console.log(document.querySelector(".container"));


//Remove node : using .remove()

// document.getElementById("box").remove();
// document.querySelector(".box").remove();

//className & classList
let dumbo=document.querySelector(".box");
console.log(dumbo.classList)
console.log(dumbo.className)
//if we assign a classname to e.classname, it replaces the entire class string
dumbo.className="dumbo";
console.log(document.querySelector(".container"));
let node=document.querySelector(".box");
node.classList.add("yeet");
node.classList.remove("wow")
node.classList.toggle("yeehaw");
node.classList.toggle("yeehaw");
console.log(document.querySelector(".container"));
console.log(node.classList.contains("hehe"));
console.log(node.classList.contains("he"));
