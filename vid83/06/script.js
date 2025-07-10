// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowel(str){
    let arr=["A","E","I","O","U","a","e","i","o","u"];
    let count=0;
    for (const e of str) {
        if(arr.includes(e)==true){
            count++;
        }
    }
    console.log(count);
}
vowel("hello");         // 2 → e, o
vowel("world");         // 1 → o
vowel("sky");           // 0 → no vowels
vowel("AEIOU");         // 5 → all uppercase vowels
vowel("aeiou");         // 5 → all lowercase vowels
vowel("The Quick Brown Fox");   // 5 → e, u, i, o, o
vowel("C@tch-22!");             // 0 unless explicitly handled 
vowel("12345");                 // 0 → no vowels
//empty & edge cases
vowel("");                      // 0 → empty string
vowel("     ");                 // 0 → only spaces
//long string with noise
vowel("Lorem ipsum DOLOR sit amet, consectetur!"); // 13 → mix of uppercase/lowercase vowels
vowel("café résumé naïve");
