function fibonacci(n){
    if(n==0 ||n==1)
        return n
    else return fibonacci(n-1)+fibonacci(n-2)
}

console.log(fibonacci(8))

function fibo(n,a,b){
    for(var i=2;i<=n;i++){
        c = a+b
        a=b
        b=c
    }
    return c
}
console.log(fibo(8,0,1))