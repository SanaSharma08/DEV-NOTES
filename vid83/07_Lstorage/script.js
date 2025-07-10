// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note){
    localStorage.setItem("note",note);
}
let note=localStorage.getItem("note");
document.querySelector(".notes").innerHTML=note; // view existing till button not clicked
document.getElementById("btn").addEventListener("click",()=>{
    let note=prompt("Enter your note: ");
    saveNoteToLocalStorage(note);
    document.querySelector(".notes").innerHTML=note; 
});
