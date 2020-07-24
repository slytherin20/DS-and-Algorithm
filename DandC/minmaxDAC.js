var minmaxDAC = function(a,p,q){
    if(p==q) return [a[p],a[p]]
    else if(p==(q-1)) {
        if(a[p]>a[q]) return [a[q],a[p]]
        else return [a[p],a[q]]
    }
    else{
        var min1,max1,min2,max2,max,min,firstHalf,secondHalf;
        m = (p+q)/2;
        m=m|0
        firstHalf= minmaxDAC(a,p,m);
        min1 = firstHalf[0];
        max1 = firstHalf[1];
        secondHalf = minmaxDAC(a,m+1,q);
        min2 = secondHalf[0];
        max2 = secondHalf[1];
        if(min1>min2) min=min2;
        else min = min1;
        if(max1>max2) max = max1;
        else max = max2;
        return [min,max]
    }
}  //T.C = O(n) stack size = logn space -n

console.log(minmaxDAC([10,9,7,8,6,4,5,1,3,2],0,9))