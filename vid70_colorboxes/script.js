let colorobj = {
    1: "#780000",
    2: "#c1121f",
    3: "#fdf0d5", 
    4: "#003049",
    5: "#669bbc",
    6: "#264653",
    7:"#2a9d8f",
    8:"#e9c46a",
    9:"#f4a261",
    10:"#e76f51"
}
let boxes = document.body.firstElementChild.children;
console.log(boxes);

function colorBoxes(arr , min , max){
    for(let i=0; i < arr.length;i++){
        //generating random number between min & max
        let textcolor = Math.floor(Math.random() * (max - min + 1)) + min;
        let bgcolor = Math.floor(Math.random() * (max - min + 1)) + min;
        arr[i].style.color=colorobj[textcolor];
        arr[i].style.backgroundColor=colorobj[bgcolor];
    }
    

}

colorBoxes(boxes,1,10);