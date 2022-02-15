import Stack from "./Stack.js";

let stack = new Stack();


function checkOperator(op){
    let operators = ["*","/","+","-","**"];
    return operators.includes(op);
}
//a+b*c= +a*bc
function prefixToPostfix(exp){
    if(!exp) return;
    exp = exp.split(" ").join("");
    let len = exp.length-1;
    while(len>=0){
        if(!checkOperator(exp[len])) stack.push(exp[len]);
        else{
            let el1 = stack.pop();
            let el2 = stack.pop();
            let temp = el1+el2+ exp[len];
            stack.push(temp);
        }
        len--;
    }
    return stack.pop();
}

let res = prefixToPostfix("*-A/BC-/AKL");
console.log("Prefix to postfix:",res);