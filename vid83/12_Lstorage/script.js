// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

if (!localStorage.getItem("tokenList")) {
    localStorage.setItem("tokenList", JSON.stringify([]));
} // create an empty list only if it does not exist, else it will create an empty list on every reload.

//functions
function setAuthToken(token){
    let date=new Date();
    let expiration = String((date.getDate() + 1) + " - " + (date.getMonth()+1) + " - " + date.getFullYear()+ " - " + (date.getHours() + ":" + date.getMinutes()));
    const obj={
        "token":token,
        "expiry":expiration
    };
    let list=JSON.parse(localStorage.getItem("tokenList"));
    list.push(obj);
    localStorage.setItem("tokenList",JSON.stringify(list));
    displayToken(); //automatically displays updated list.
}
function displayToken(){
    const container=document.querySelector(".token");
    container.innerHTML=""; // clear out previously visible token to prevent token duplicacy since all token are displayed again in loop anyway.
    let card = JSON.parse(localStorage.getItem("tokenList"));
    for (const element of card) {
        let div=document.createElement('div');
        div.innerHTML = `Token: ${element.token} &emsp; Expiry: ${element.expiry}`;
        container.append(div);
    }
}
function deleteToken(){
    let num=prompt("Enter Token Number to be deleted: ");
    let card = JSON.parse(localStorage.getItem("tokenList"));
    for (const element of card) {
        if(element.token == num.trim()){
            let index=card.indexOf(element);
            card.splice(index,1);
        }
    }
    localStorage.setItem("tokenList",JSON.stringify(card));
    displayToken(); //automatically displays updated list.
}

//buttons
document.getElementById("btn2").addEventListener("click",()=>{
    let token=prompt("Add Token Number: ");
    setAuthToken(token.trim());
});

document.getElementById("btn1").addEventListener("click",displayToken);

document.getElementById("btn3").addEventListener("click",deleteToken);