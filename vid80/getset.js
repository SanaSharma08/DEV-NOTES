class Getset{
    constructor(name){
        //setter is invoked
        this.naam=name;
    }
    get naam(){
        return this._naam;
    }
    set naam(value){
        if(value.length<4){
            console.log("Name too short")
            return ;
        }
        this._naam=value;
    }
}
let a=new Getset("Harry"); // constructor -> setter
console.log(a.naam); //getter
a.naam="Tom"; // setter: name too short 
a.naam="jagcdscgfbwke"; //setter
console.log(a.naam); //getter: jagcdscgfbwke
a.naam=""; // name too short


// Flow : Object Initialization -> constructor -> setter -> getter