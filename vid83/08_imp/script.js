// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

//Very Important for async-await concept fundamentals

async function arraymap(arr){ //async functions always return a promise
    let newarr=[];
    for (let e of arr) {
        newarr.push(new Promise((resolve,reject)=>{ //we r pushing the promise to array instead of returning it so we store it.
            setTimeout(()=>{
                resolve(e*2);
            },500);
        }))
    }
    return newarr;
}

async function print(){
    const numbers = [12, -7, 3, 0, 25, -14, 8, 19, -2, 6, 31, -9, 4, -17, 22];
    //since async functions return promises so here we will get a promise containing more unresolved promises & await will just wait for the returned parent promise to resolve & give us an array of unresolved promises.
    let d= await arraymap(numbers); //waits for arraymap()to return something that is an array of unresolved arrays here & not resolved arrays
    //This statements wait for all promises in array to resolve & give results.
    let dd= await Promise.all(d); // waits for all pending promises to resolve & then give an array of resolved values.
    console.log(dd)
    //hence we r using await twice here. Normally when a function returns a single promise at a time, it is resolved & await prints the resolved value so we won't need multiple awaits.
}
print();