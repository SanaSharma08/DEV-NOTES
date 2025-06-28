async function getDelay(){
    return new Promise((resolve)=>{
        let random_delay=Math.floor(Math.random()*(7)+1); // min=1 max=7
        resolve(random_delay * 1000); //delay is set in miliseconds
    })
}
async function getMessage(){
    let div1=document.createElement("div");
    div1.className="text";
    div1.innerHTML=`<p>Initializing Hacking<span class="one">.</span> <span class="two">.</span> <span class="three">.</span> </p>`;


    let div2=document.createElement("div");
    div2.className="text";
    div2.innerHTML=`<p>Reading Your Files<span class="one">.</span> <span class="two">.</span> <span class="three">.</span> </p>`;

    let div3=document.createElement("div");
    div3.className="text";
    div3.innerHTML=`<p>Password Files Detected<span class="one">.</span> <span class="two">.</span> <span class="three">.</span> </p>`;

    let div4=document.createElement("div");
    div4.className="text";
    div4.innerHTML=`<p>Sending all passwords & personal files to server<span class="one">.</span> <span class="two">.</span> <span class="three">.</span> </p>`;

    let div5=document.createElement("div");
    div5.className="text";
    div5.innerHTML=`<p>cleaning up<span class="one">.</span> <span class="two">.</span> <span class="three">.</span> </p>`;
    
    let arr=[div1,div2,div3,div4,div5];
    for(let i=0;i<arr.length;i++){
        let delay=await getDelay(); //await give settled value directly i.e delay in this case.
        setTimeout(()=>{
            document.querySelector(".container").append(arr[i]);
            arr[i].scrollIntoView({ behavior: "smooth" });
            console.log(arr[i].innerText);
        },delay);
    };

};

getMessage();