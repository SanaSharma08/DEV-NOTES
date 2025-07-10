// let obj={
//     a:1,
//     b:"harry"
// }
// console.log(obj);

//Prototypal Inheritance
// let animal={
//     eats:true,
//     drinks:true,
//     breaths:true,
//     reproduces:true
// }
// let rabbit={
//     hops:true
// }
// rabbit.__proto__=animal;
// console.log(rabbit);
// console.log(rabbit.eats);

// Classes & Inheritence

class Animal{
    constructor(naam){
        this.name=naam;
        console.log("Object created!")
    }
    eats(diet,food){
        this.diet=diet;
        // console.log(diet);
        this.food=food;
        // console.log(food);
        return `${this.name} eats ${this.food} & has ${this.diet} diet.`;
    }
    jumps(jump){
        this.jump=jump;
        // console.log(jump)
        if(jump=="yes"){
            return `${this.name} jumps`;
        }
        return `${this.name} does not jump.`;
        
    }
}

let a=new Animal("Bunny");
console.log(a);
let f=a.eats("omnivorus","carrots")
let j= a.jumps("yes")
console.log(f);
console.log(j);

//inheritence

class Lion extends Animal{
    constructor(name){
        super(name); //mandatory to initialize parent constructor first
        this.species="Panthera leo"; 
    }
    //method overriding
    eats(food){
        // super.eats(food); if you want to execute parent eats().
        this.food=food;
        return `${this.name} eats ${this.food}.`;
    }
    hunts(hunt){
        this.hunting=hunt;
        if(this.hunting=="yes"){
            return `${this.name} hunts.`;
        }
        return `${this.name} does not hunt.`;
    }

}
let l=new Lion("Sheru");
let lf=l.eats("other animals"); //method overriding
// properties from parent class are inherited.
let lj=l.jumps("no");
let lh=l.hunts("yes");
console.log(l);
console.log(lf); // prints: Sheru eats other animals.
console.log(lj);
console.log(lh);
console.log( " Is l an instance of Lion: " + (l instanceof Lion)); // instanceof operator.

//static methods

class Employee{
    constructor(E_id){
        this.id=E_id;
        console.log("Employee Portal Opening!")
    }
    departments(dep){
        this.d1="IT";
        this.d2="Finance";
        this.d3="Legal";
        this.d4="HR";
        this.d5="Accounts";
        return `${this.id} belong to ${dep} department.`
    }
    static greet(){ //static method
        console.log("Hi! How may I help you?")
    }
}

let e=new Employee(12345);
let d=e.departments("HR");
console.log(e);
console.log(d);
Employee.greet(); // static function can be called directly via classname.

//getters & setters


