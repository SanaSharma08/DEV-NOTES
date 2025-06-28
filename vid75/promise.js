console.log('This is Promises');
let prom1=new Promise((resolve,reject)=>{
    let rn=Math.random();
    if(rn<0.5){
        reject("This random number does not support you!");
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am Done!");
            resolve("Harry");
        },3000);
    }
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})


// const callkaro =(arg) => {
//   console.log(arg);
// }


// const loadScript = (source,callkaro) => {
//   let ss = document.createElement("script");
//   ss.src=source;
//   ss.onload=() => {
//     callkaro("harry");
//   }
//   document.head.append(ss);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callkaro);


