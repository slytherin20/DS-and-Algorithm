//Unstable counting sort
function countingSort(a,k){
let count=[];
let output=[];
for(let i=0;i<=k;i++){
    count[i] = 0;
}
for(let i=0;i<a.length;i++){
    count[a[i]] = count[a[i]]+1;
}
for(let i=1;i<=k;i++){
    count[i] = count[i-1]+count[i];
}
for(let i=0;i<a.length;i++){
    output[count[a[i]]-1] = a[i];
    count[a[i]]--;
}

return output;

}

//Stable countSort


console.log(countingSort([1,4,1,2,0,7,5,2],9));