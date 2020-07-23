function swap(a,i,j){
    let temp;
    temp = a[i];
    a[i] = a[j];
    a[j]=temp;
}


function partition(a,p,q){
    let x=a[p];
    let i=p;
    for(let j=p+1;j<=q;j++){
        if(a[j]<=x){
            i=i+1;
            swap(a,i,j);
        }
    }
    swap(a,i,p);
    return i;
}

function quickSort(a,p,q){
    if(a.length<2) return a;
    else if(p<q){
        let m = partition(a,p,q);
        quickSort(a,p,m-1);
        quickSort(a,m+1,q);
    }
    return a;
}

console.log(quickSort([2,3,54,1,56,78,34,12,33,90,22],0,10));