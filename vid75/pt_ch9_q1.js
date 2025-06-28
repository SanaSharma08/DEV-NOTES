function loadScript(src){
    return new Promise((resolve,reject)=>{
        let elem=document.createElement('script');
        elem.src=src;
        elem.addEventListener("load",()=>{
            resolve(src + " loaded successfully");
        })
        elem.addEventListener("error",()=>{
            reject("Failed to load script: " + src);
        })
        document.body.append(elem);
    });
}

loadScript("test.js").then((a)=>{
    alert(a); // will show once test.js is loaded
}).catch((error)=>{
    console.log(error);
});