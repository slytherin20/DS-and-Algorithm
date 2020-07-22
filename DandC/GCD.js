function gcd(n,m){
    if(n==0) return m
    else if(m==0) return n
    else return gcd(m%n,n)
}

console.log(gcd(267,11))  //T.C-O(logn) stack size=logn space-logn

//Npn-recursive approach
var x= function(n,m) {
    while (m != 0 && n != 0) {
        r=m%n
        m=n
        n=r
    }
    if (m == 0) return n
    if (n == 0) return m
}

console.log(x(267,11))