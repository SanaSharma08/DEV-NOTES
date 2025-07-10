// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum(arr){
    let ans=0 , i=0;
    while(arr[i]>=0){
        ans+=arr[i];
        i++;
    }
    console.log(ans);
}
const mixedNumbers = [12, 8, 0, 27, 19, -7, 33, -21, 6, -2, 15, -18];
sum(mixedNumbers);