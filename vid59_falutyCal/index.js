function calculate(a,b,c){
    let fault=Math.random();
    if(fault<0.1){
        if(c=="+"){
            if(a>b){
                return a-b;
            }
            else{
                return b-a;
            }
        }
        else if(c=="*"){
            return a+b;
        }
        else if(c=="-"){
            if(b!=0){
                return a/b;
            }
            else{
                return 0;
            }
        }
        else if(c=="/"){
            return a**b;
        }
        else{
            return 0;
        }
    }
    else{
        if(c=="+"){
            return a+b;
        }
        else if(c=="*"){
            return a*b;
        }
        else if(c=="-"){
            if(a>b){
                return a-b;
            }
            else{
                return b-a;
            }
        }
        else if(c=="/"){
            if(b!=0){
                return a/b;
            }
            else{
                return 0;
            }
        }
        else{
            let warn = "Enter Valid Operator from + * - /";
            return warn;
        }
    }
}

let result=calculate(10,15,"/");
console.log(result);