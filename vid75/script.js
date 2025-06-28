const callkaro =(arg) => {
  console.log(arg);
}

//arraow function : allows u to but a function into a variable name
const loadScript = (source,callback) => {
  let ss = document.createElement("script");
  ss.src=source;
  ss.onload=() => {
    callback("harry");
  }
  document.head.append(ss);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callkaro);

//regular function
function addScript(source,callback){
  let div=document.createElement('script');
  div.src=source;
  div.addEventListener("load",()=>{
    console.log("calling callback");
    callback();
  });
  document.head.append(div);
}

function bako(){
  console.log("bak diya callback");
}

addScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", bako);


// doing same stuff with promise

function promiseScript(source) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = source;
    script.addEventListener("load", () => {
      console.log("Script loaded:", source);
      resolve(); // Resolve only when script is fully loaded
    });
    script.addEventListener("error", () => {
      console.error("Failed to load:", source);
      reject();
    });
    document.head.appendChild(script);
  });
}

// Chain with return so that each waits for the previous
promiseScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
  .then(() => {
    console.log("running script once");
    return promiseScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js");
  })
  .then(() => {
    console.log("running script twice");
    return promiseScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js");
  })
  .then(() => {
    console.log("running script thrice");
  })
  .catch(() => {
    console.log("error");
  });

