let button= document.getElementById("btn");
// ALL EVENTS LIST 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
//function that changes content inside .box on clicking button
button.addEventListener("click", ()=>{
    let content = document.querySelector(".box");
    const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "A watched pot never boils.",
    "They went to the market to buy fresh vegetables.",
    "It's always darkest before the dawn.",
    "He finished the project just in time.",
    "The stars were bright on a clear summer night.",
    "Don't count your chickens before they hatch.",
    "He reads a new book every week.",
    "Life is what happens when you're busy making other plans."
    ];
    let random=Math.floor(Math.random()* sentences.length);
    // let div=document.createElement('div');
    // div.className="newbox";
    // div.textContent=sentences[random];
    // content.replaceWith(div);
    content.textContent=sentences[random];
})

//displays alert when we right click inside page

document.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click!")
    
})