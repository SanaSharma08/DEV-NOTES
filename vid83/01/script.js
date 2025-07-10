// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school.
// Imnplement a JavaScript function that takes an array of student names and assigns them to one of
// the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8). Ravenclaw(length
// less than 12). or Slytherin(length greater than or equal to 12)) based on the length of their names.

function house(arr){
    let obj={
        Gryffindor:[],
        Hufflepuff:[],
        Ravenclaw:[],
        Slytherin:[]
    }
    arr.forEach(e => {
        if(e.length<6){
            obj.Gryffindor.push(e);
        }
        else if(e.length<8){
            obj.Hufflepuff.push(e);
        }
        else if(e.length<12){
            obj.Ravenclaw.push(e);
        }
        if(e.length>=12){
            obj.Slytherin.push(e);
        }
    });
    console.log(obj);
}
const names = ["","A","Al","Jo","Sam","Eva","Leo","Lily","Omar","Noah","Milan","Rohan","Emily","Sophia","Hunter","Marcus","Harmeet","Jessica","Raymond","Ishitaaa","Jonathan","Samantha","Christina","Sebastian","Theodore","Alexandria","Montgomery","Maximilian","Maximiliano","Constantine","Christoffer","Chandralekha","Bartholomew","Maximilienne","Mohammadsadiq","Christophera","Alexandrienne","Alexandrianna","Maximilianae","Chandramukhiya","Maximiliennette","Chandralekhani"];
house(names);