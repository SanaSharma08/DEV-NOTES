async function getData(){
    // simulating data retrieval from server
    // normally done by fetch api
    return new Promise((resolve,reject)=>{
    let rn=1;
    // let rn=0;
    if(rn==1){
            setTimeout(()=>{
            console.log("Fetching Data async await worked!");
            resolve("Resolved by code 566");
        },3000);
    }
    else{
        reject("Error Code 404: Number not supported");
    }
    })
}
async function main(){ // because await only works inside an async function. There r other ways to deal with await, but focus on this for now.
    console.log('Sending Data Request testing async await');
    console.log("Fetching Data 1");
    let data= await getData(); // as the return statement said, data will get the promise
    console.log(data); 
    //then & catch do not work with await since data now holds the settlement value instead of a promise if you use await.
    // data.then((a)=>{
    //     console.log(a);
    // }).catch((a)=>{
    //     console.log(a);
    // })
    console.log("Data Processing");
    console.log("Data Saving");
    console.log("Task 2");
}
main();

// Using Fetch API : method:GET is default
//us JSONPlaceholder for free REST api urls
async function dataLao(){
    let url="https://jsonplaceholder.typicode.com/todos/1"; 
    console.log("Data aa raha hai");
    let data=await fetch(url);  // returns a promise
    let response=await data.json(); // converst server response in json format. 
    //.text() can also be used to get response in text format.
    // let response=await data.text();
    return response;
}

async function printKaro(){
    console.log("Fetching Data fetch api code");
    let data= await dataLao();
    console.log("DATA: ",data);
    console.log("Data aa gaya !!!! Fetch API Success");

}

printKaro();

//Fetch API method:POST
async function post() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        username: "example1",
        title:"food",
        body:"bar",
        userId:"harry",
    }),
    });
    let result = await response.json();
    return result;
}

async function print() {
    
    let result=await post();
    try {
        console.log("Data POSTING via POST")
        console.log("Success:", result);
    } catch (error) {
        console.log("Data POSTING via POST")
        console.error("Error:", error);
    }
}
print();


