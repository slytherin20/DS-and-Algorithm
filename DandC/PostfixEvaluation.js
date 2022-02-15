import Stack from "./Stack.js";

let stack = new Stack();


function checkOperator(op){
    let operators = ["+","-","*","/","**"];
    return operators.includes(op);
}

function getOperatorFromString(op){
    switch(op){
        case "+": return 1;
        case "-": return 2;
        case "*": return 3;
        case "/": return 4;
        case "**": return 5;
        default: return -1;

    }
}
function postfixEvaluation(exp){
 if(!exp) return;
 exp = exp.split(" ").join("");
let i=0;
while(i<exp.length){

    if(!checkOperator(exp[i])) stack.push(exp[i]);
    else{
        let el1 = Number(stack.pop());
        let el2 = Number(stack.pop());
        if(isNaN(el1) || isNaN(el2)) return "Expression is invalid."
        let rank = getOperatorFromString(exp[i]);
        let temp;
        switch(rank){
            case 1: temp = el2+el1; break;
            case 2: temp = el2 - el1; break;
            case 3: temp = el2*el1; break;
            case 4: temp = el2/el1; break;
            case 5: temp = el2**el1; break;
            default: return;
        }
        stack.push(temp);
    }
    i++;
}

console.log("Postfix evaluation:",stack.pop());
}

postfixEvaluation("23*53*5/3*-72*-61*+3-")