function powerDAC(a,n){
    if(n===1) return a;
    else{
        var mid = n/2;
        mid = ~~mid;
        var b = powerDAC(a,mid)
        var c = b*b
        if(n%2===0) return c
        else return a*c
    }
}

console.log(powerDAC(2,4))
//T.C=O(logn) stack size = logn space complexity = O(logn)