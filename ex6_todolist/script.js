//Creating element for date in todo head
let p=document.createElement('p');
let date=new Date();
function findDay(num){
    let week=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return week[num-1];
}
let day=findDay(date.getDay());
p.textContent= day + ", " + date.getDate() + " / " + (date.getMonth()+1) + " / "+ date.getFullYear();
document.querySelector(".container .head .b3").append(p);

//ADD New element

function addAction(){
    let action = prompt("Enter new action: ");
    let bullet= Array.from(document.querySelectorAll(".line")).length + 1; //bullet
    let div=document.createElement('div'); //div
    div.style.display="flex";
    div.style.width="100%";
    div.style.borderTop="2px solid black";
    let b1=document.createElement('div'); //b1
    b1.style.width="20%";
    let b2=document.createElement('div'); //b2
    b2.style.width="60%";
    b2.style.borderLeft="2px solid red";
    b2.style.borderRight="2px solid red";
    b2.style.paddingLeft="10px";
    let b3=document.createElement('div'); //b3
    b3.style.width="20%";
    div.append(b1);
    div.append(b2);
    div.append(b3);
    let line=document.createElement('p'); // sentence
    line.className="line"; //class
    line.id=bullet; //id
    div.setAttribute("data-bullet", bullet); // giving div an attribute to facilitate deletion
    line.textContent=bullet + ". " + action;
    b2.append(line);
    document.querySelector(".container").append(div);
}

function delAction(){
    let del = prompt("Enter bullet num to be deleted: ");
    let isTrue=confirm(`Are you sure you want to delete bullet ${del}?`);
    if(isTrue){
        // "?" is used to handle .remove() if it gets a null value from queryselector - it will not throw an error instead fails the action silently
        document.querySelector(`[data-bullet='${del}']`)?.remove(); // getEelementByClassName returns an HTML collection
    }
    else{
       alert("Action Cancelled !"); 
    }
}


//function calling & event listeners
let btn1=document.getElementById("add");
btn1.addEventListener("click",addAction);


let btn2=document.getElementById("del");
btn2.addEventListener("click",delAction);
