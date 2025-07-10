// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
async function brewCoffee(coffee){
    return new Promise((resolve,reject)=>{
        let random=Math.floor((Math.random()*(5000-1000+1))+1000);
        setTimeout(()=>{
            resolve(`${coffee} is ready for takeout!`);
        },random);
    })
}
(async function print(){
    try{
        let name="latte";
        let call=await brewCoffee(name);
        console.log(call);
    }catch(err){
        console.log("An error has occured!");
    }
})();