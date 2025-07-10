// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder(order){
    return new Promise((resolve,reject)=>{
        if(typeof order === "string" && order.trim() != ""){
            let random=Math.floor((Math.random()*(5000-1000+1))+1000);
            setTimeout(()=>{
                resolve(`Your order for ${order} is confirmed!`);
            },random);
        }
        else{
            reject("Something went wrong! Try again later.")
        }
    })
}
(async function print(){
    try{
        let b=await placeOrder();
        console.log(b);
    }catch(err){
        console.log("ERROR: ",err);
    }
})();