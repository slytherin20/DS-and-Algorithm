function factorial(n){
    if(n==1)
        return n
    else
        return n*factorial(n-1)
}

console.log(factorial(5))

//Non-recursive

function fact(n){
   s = 1
    for(var i=1;i<=n;i++){
        s=s*i
    }
    return s
}

console.log(fact(6))