// 2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However. there•s a catch if the array contains consecutive duplicate elements, double only one random of them.

function double(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i+1]){
            arr[i] = arr[i]*2;
        }
        else{
            let start=arr[i]; //current value of i
            let j=i;
            while(arr[j]==start){
                j++; // counts how many indexes have duplicates
            }
            let randomIndex = i + Math.floor(Math.random() * (j - i));
            arr[randomIndex]=arr[randomIndex]*2;
            i=j; //move i to j
        }
        
    }
    console.log(arr);
}
const numbers = [7, 7, 3, 12, 12, 12, 5, 5, 3, 9, 1, 8, 8, 4, 2, 2, 10, 6, 6, 11];
double(numbers);

