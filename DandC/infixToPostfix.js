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
    //Divide exp into array.
    while(i<exp.length){
        if(exp[i]==="*" && exp[i+1] && exp[i+1]==="*"){  // for ** operator
            arr.push("**");
            i=i+2;
        }
        else {
            arr.push(exp[i]);
        i++;
        }
    }
    //Convert process.
    i=0;
    while(i<arr.length){
        if(!checkOperator(arr[i]))  str+=arr[i];
        else{
         openBrack =  compareElements(arr[i],openBrack); //compare arr elemnet with stack top most element.
        }
        i++;
    }
    let len = stack.getLength();
         while(len>0){
             str += stack.pop();
             len--;
         }
         if(openBrack!==0){
             console.log("The expression seems to have unbalanced pair of brackets.Please look into it.");
             return;
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
    //L->R
    if(topPre===arrPre){
        stack.pop();
        str+= topElement;
    }
    stack.push(el);
}

function forMulDiv(el,topElement,topPre,arrPre){
    //R->L
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
    if(openBrack<0) return -1;
    stack.push("(");
     ++openBrack; 
     return openBrack;
}

function forCloseBrack(topPre,arrPre,openBrack){
    if(openBrack<1) return -1;
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

infixToPostfix("(a+(b/d*c)-e)+f");
