function multiply(n,m){
    if(n===0 ||m==0) return 0
    else return m+multiply(n-1,m)
}
console.log(multiply(2,3))  //T.C-O(n) stack size = n space complexity=O(n)

//Non-recursive approach
function mul(n,m){
    s=0
    for(var i=1;i<=n;i++){
        s=s+m
    }
    return s
}

console.log(mul(2,3))