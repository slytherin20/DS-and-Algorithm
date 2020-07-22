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
        return merge(mergeSort(leftArray),mergeSort(rightArray));

    }
}

let result = mergeSort([50,65,34,12,15,30]);
console.log(result);