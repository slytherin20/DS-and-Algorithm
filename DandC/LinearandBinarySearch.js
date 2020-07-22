function linearSearch(a,x){
    for(let i=0;i<a.length;i++){
        if(a[i]===x) return i

    }
    return -1
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9],7));

function BS(a,p,q,x){
    if(p==q) {
        if(a[p]==x)
            return p
        else
            return -1

    }
    else{
        var mid;
        mid = (p+q)/2;
        mid = mid|0;
        if(a[mid]==x) return mid
        else if(a[mid]>x) return BS(a,p,mid-1,x);
        else return BS(a,mid+1,q,x);
    }
    }

    console.log(BS([1,2,3,4,5,6,7,8,9],0,8,9));