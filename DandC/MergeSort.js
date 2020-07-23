function merge(left,right) {
    let newArray = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            newArray.push(left[0]);
            left.shift();
        }
        else{
            newArray.push(right[0]);
            right.shift();
        }
    }
    while(left.length){
        newArray.push(left.shift())
    }
    while(right.length){
        newArray.push(right.shift());
    }
    return newArray
}

function mergeSort(a){
    if(a.length<2) {return a;}
    else{
        let mid = Math.floor(a.length/2);
        let leftArray = a.slice(0,mid);
        let rightArray = a.slice(mid,a.length);
        return inplaceMerge(mergeSort(leftArray),mergeSort(rightArray));

    }
}

//Inplace merge algorithm
function inplaceMerge(a,b){
    let p=0;
    while(p<a.length){
        if(a[p]>b[0]){
            let temp = a[p];
            a[p] = b[0];
            b[0] = temp;
            sortRem(b);
        }
        p=p+1
    }
    return a.concat(b);
}

function sortRem(b){
let p=0;
let next = p+1;
if(b[p]<=b[next]) return b;
while(next<b.length){
    if(b[p]>b[next]) {
        let temp = b[p];
        b[p] = b[next];
        b[next] = temp;
        p=p+1;
    }
    next=next+1;
}
return b;
}




let result = mergeSort([50,65,34,12,15,30]);
console.log(result);