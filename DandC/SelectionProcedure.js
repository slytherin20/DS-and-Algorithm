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

function selectionProcedure(a,p,q,k){
    if(p===q) return a[p];
    else{
       let i = partition(a,p,q);
        if(i===k) return a[i];
        if(k<i)
            return selectionProcedure(a,p,i-1,k);
        else
            return selectionProcedure(a,i+1,q,k);
    }
}

console.log(selectionProcedure([50,70,31,99,46,27,59,25,17,18,91,120],0,11,4));