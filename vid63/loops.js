let a=[1,93,5,6,88];
for(let i=0;i<a.length;i++){
    const element=a[i];
    console.log(element);
}

console.log("OUTPUT FROM FOREACH LOOP: ");
a.forEach(element => {
    console.log(element);
})
console.log("OUTPUT FROM FOREACH LOOP - value index array: ");
a.forEach((value , index , array) => {
    console.log(value, index , array);
});
console.log("OUTPUT FROM FORof LOOP: ");
for (const element of a) {
    console.log(element);
}

//maping 
let arr=[1,3,7,11];
let newarr=[];
//classic for
for(let i=0;i<arr.length;i++){
    const element=arr[i];
    newarr.push(element**2);
}
console.log("arr : ");
console.log(arr);
console.log("newarr : ");
console.log(newarr);
//map()
let narr = arr.map((value, index, array)=>{
    return value **2;
})
console.log("new array using map() : ");
console.log(narr);

arr.map((value, index, array)=>{
    console.log(value**2);
})

//filter()
let frr=[1,78,99,2,34,5];
let greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
let nfrr=frr.filter(greaterThanSeven);
console.log("frr:");
console.log(frr);
console.log("nfrr:");
console.log(nfrr);

//or 
let newfrr=frr.filter((e)=>{
    if(e>7){
        return true;
    }
    return false;
});
console.log("frr:");
console.log(frr);
console.log("newfrr:");
console.log(newfrr);

//reduce method 

let arr2=[1,2,3,4,5,6];
const red = (a,b) => {
    return a*b;
}
let op = arr2.reduce(red);
console.log("output of reduce method: " + op);

//Array.from
console.log("array from: ");
console.log(Array.from("HARRY"));