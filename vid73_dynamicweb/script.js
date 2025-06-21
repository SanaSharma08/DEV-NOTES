
//title+ video title
//channel=channel name i.e codewithharry
//views=integer
// months = e.g: 2 months ago
//duration = 11:00 i.e 11 minutes
//thumbnail: image url : https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA

//styling container
let style = document.createElement('style');
style.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');`;
document.head.append(style);
let boxy=document.querySelector(".container");
boxy.style.width="100vw";
boxy.style.border="2px solid black";
boxy.style.display="flex";
boxy.style.flexDirection ="column";
boxy.style.gap ="10px";
boxy.style.padding ="10px";



function createCard(title,channel,views,months,duration,thumbnail){
    document.body.style.fontFamily = "'Poppins', sans-serif";
    //finish function
    //creating a card with div
    let div = document.createElement('div');
    div.className="card";
    div.style.display="flex";
    div.style.gap="20px";
    div.style.alignItems="center";
    div.style.border="2px solid red"; //border
    div.style.height = "120px"
    document.body.querySelector(".container").append(div);


    //creating image container & putting image in it!
    let image = document.createElement('div');
    image.className="image";
    // image.style.border="2px solid red"; //border
    image.innerHTML=`<img src="${thumbnail}">`;
    document.querySelector(".container").lastElementChild.append(image);
    let photo=document.querySelector(".container").lastElementChild.querySelector(".image img"); //image
    let photocont=document.querySelector(".container").lastElementChild.querySelector(".image"); //image container
    photocont.style.position="relative";
    photocont.style.zIndex="0";
    photocont.style.height="100%";
    photo.style.width="100%";
    photo.style.height="100%";
    photo.style.objectFit="cover";
    photo.style.position="relative";
    photo.style.zIndex="1";


    //creating small div for duration
    let time=document.createElement('div');
    time.className="time";
    time.innerHTML=`<span>${duration}</span>`;
    time.style.backgroundColor="rgba(0, 0, 0, 0.75)";
    time.style.width="max-content";
    time.style.padding="0px 5px";
    time.style.color="white";
    time.style.fontSize="12px";
    photocont.append(time);
    photocont.querySelector(".time").style.position="absolute";
    photocont.querySelector(".time").style.zIndex="2";
    photocont.querySelector(".time").style.right="4px";
    photocont.querySelector(".time").style.bottom="2px";
    photocont.querySelector(".time").style.borderRadius="3px";

    //creating txt div for the rest of the content
    let text=document.createElement('div');
    text.className="txt";
    text.innerHTML=`<h3>${title}</h3>`; // inserting title
    text.style.display="flex";
    text.style.flexDirection="column";
    // text.style.border="2px solid black"; // border
    text.style.gap="5px";
    text.style.height="100%";
    text.style.alignItems="flex-start";
    text.style.padding="10px 0px";
    document.querySelector(".container").lastElementChild.append(text);
    document.querySelector(".container").lastElementChild.querySelector(".txt h3").style.margin="0px"; // removing margin from h3
    document.querySelector(".container").lastElementChild.querySelector(".txt h3").style.fontSize="16px";

    //putting everything else inside a flexbox & then putting it in txt

    let subhead=document.createElement('div');
    subhead.className="sub";
    subhead.style.display="flex";
    subhead.style.gap="3px";
    subhead.style.alignItems="center";
    subhead.style.justifyContent="left";
    // subhead.style.border="2px solid black"; // border
    subhead.style.fontSize="12px";
    document.querySelector(".container").lastElementChild.querySelector(".txt").append(subhead);
    let subheading =document.querySelector(".container").lastElementChild.querySelector(".txt .sub");

    //adding channel
    subheading.insertAdjacentHTML("beforeend",`<p>${channel}</p>`);


    //removing margin from p 
    let arr = Array.from(subheading.children);
    arr.forEach(e => {
        e.style.margin="0px";
    });

    //calculating views logic
    // let v=0;
    // let viewnum=views;
    // while(viewnum>0){ // getting number of digits in views
    //     v=v+1;
    //     viewnum=Math.floor(viewnum/10);
    // }
    if(views>=1000 && views<1000000){
        views=views/1000 + 'K';
    }
    else if(views>=1000000 && views<1000000000){
        views=views/1000000 + 'M';
    }
    else if(views>=1000000000){
        views=views/1000000000 + 'B';
    }
    else{
        views=views;
    }
    subheading.insertAdjacentHTML("beforeend",`<p> • ${views} views</p>`);
    subheading.insertAdjacentHTML("beforeend",`<p> • ${months} months ago</p>`);
}
let thumbnail="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA";

let title="JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73";

let channel="codewithHarry";
let views = 10;
let months=2;
let duration="11:00";
createCard(title,channel,views,months,duration,thumbnail);
let t2="Semantic Tags in HTML | Sigma Web Development Course - Tutorial #11";
let v2=123000;
let m2=7;
let d2="1:09:11";
createCard(t2,channel,v2,m2,d2,thumbnail);
let t3=prompt("Enter Title: ");
let v3=prompt("Enter views (int): ");
let m3=prompt("Enter months(int): ");
let d3=prompt("Enter duration(string): ");
createCard(t3,channel,v3,m3,d3,thumbnail);