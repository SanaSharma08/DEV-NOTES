// IIFE
async function sleep(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(name !=""){
                console.log(`Good Night ${name} !`);
                resolve(200);
            }
            reject(404);
        },1000);
    })
}

(async function print(){
    let a=await sleep("Harry");
    console.log(a);
    let b=await sleep("Pushpa");
    console.log(b);
    // let c=await sleep("");
    // console.log(c);
})(); // runs without call as soon as defined - declutters global namespace.

// -----------------------------------------------------------------------

// Destructuring

(async function des(){
    //I array destructuring
    let [x,y]=[1,2,3];
    console.log("x: "+ x + " ; " + "y: " + y);
    //II - var args
    let [a,b,...rest]=[10,20,34,45,56,67,88];
    console.log("a: "+ a + " ; " + "b: " + b +" ; "+"rest "+rest);
    //III - object destructuring
    let obj={
        p:"harry",
        q:"rohan",
        r:"sunny"
    }
    const{p,q,r}=obj;
    console.log(p,q,r);
    console.log(obj['p']);
})(); // this semi-colon is mandatory.

function sc(){
    if(true){
        var ss="Goodboy get in the ring!";
    }
    console.log(ss);
    const obj={
        p:"harry",
        q:"rohan",
        r:"sunny"
    }
    obj.s="happy";
    obj.q="Ronny"
    console.log(obj)
}
sc();
