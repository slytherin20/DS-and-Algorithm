import Stack from "./Stack.js";
let stack = new Stack();
let str="";
let openBrack=0;

function checkOperator(op){
    if(op==="("||op===")"|| op==="*"||op==="/"||op==="-"||op==="+"||op==="**")
    return true;
    return false;
}

function checkPrecendence(op){
    if(op==="**") return 4;
    else if(op==="*"||op==="/") return 3;
    else if(op==="+"|| op==="-") return 2;
    else if(op==="(" || op===")") return 1;
}

function infixToPostfix(exp){
    let i=0;
    let arr=[];
    while(i<exp.length){
        if(exp[i]==="*" && exp[i+1] && exp[i+1]==="*"){
            arr.push("**");
            i=i+2;
            
        }
        else {
            arr.push(exp[i]);
        i++;
        }
    }
    i=0;
    while(i<arr.length){
        if(!checkOperator(arr[i]))  str+=arr[i];
        else{
         openBrack =  compareElements(arr[i],openBrack);
        }
        i++;
    }
    let len = stack.getLength();
         while(len>0){
             str += stack.pop();
             len--;
         }
    console.log("Converted Postfix exp:",str);

}

function compareElements(el,openBrack){
    let topElement = stack.peek();
    let topPre = checkPrecendence(topElement);
    let arrPre = checkPrecendence(el);
    if(!stack.getLength()) {
        stack.push(el);
        if(el==="(") ++openBrack;
    return openBrack;
}
          //First element
    switch(el){
        case "+": forAddSub(el,topElement,topPre,arrPre);
                break;
        case "-": forAddSub(el,topElement,topPre,arrPre);  
        break;
        case "**":  forPow(topElement,topPre,arrPre); break;
        case "*": forMulDiv(el,topElement,topPre,arrPre); 
        break;
        case "/": forMulDiv(el,topElement,topPre,arrPre); 
        break;
        case "(": openBrack = forOpenBrack(openBrack); 
        break;
        case ")": openBrack = forCloseBrack(topPre,arrPre,openBrack); break;
        default: break;
    }
    return openBrack;
}


function forAddSub(el,topElement,topPre,arrPre){
    if(topPre===arrPre){
        stack.pop();
        str+= topElement;
    }
    stack.push(el);
}

function forMulDiv(el,topElement,topPre,arrPre){
    if(topPre===arrPre){
        str +=el;
    }
    else if(topPre>arrPre){
        stack.pop();
        stack.push(el);
        str +=topElement;
    }
    else{
        stack.push(el);
    }
}
function forOpenBrack(openBrack){

    stack.push("(");
     ++openBrack; 
     return openBrack;
}

function forCloseBrack(topPre,arrPre,openBrack){
    if(arrPre===topPre) {
        stack.pop();
        return --openBrack;
    }
        while(arrPre!==topPre){
          let top= stack.pop();
          str +=top;
          top = stack.peek();
          topPre = checkPrecendence(top);
        }
        stack.pop();
        return --openBrack;
}

function forPow(topElement,topPre,arrPre){
    if(topPre===arrPre){
        str += topElement;
    }
    else{
        stack.push("**");
    }
}

infixToPostfix("(a+(d/f*c)-e**g**k)");
//a+df*c/+eg**k**-
