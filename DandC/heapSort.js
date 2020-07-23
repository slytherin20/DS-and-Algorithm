function heapSort(a){
    let n = a.length;
    for(let i=Math.floor(n/2);i>=0;i--){
        heapify(a,i);
    }
    swap(a,0,a.length-1);
    heapify(a,0);
    return a;
}

function heapify(a,i){
    let left = 2*i;
    let right = 2*i+1;
    let max;
    if(a.length-1===right){
        if(a[i]<a[right]){
            max = right;
        }
        else{
            max = i;
        }

    }
    else if(a.length-1===left){
        if(a[i]<a[left]) max = left;
        else max = i;
    }
    else return ;
    swap(a,i,max);
    heapify(a,max);
}

function swap(a,i,j){
    let temp;
    temp = a[i];
    a[i] = a[j];
    a[j]=temp;
}

console.log(heapSort([1,4,7,2,87,23,45,90,12,54,76]))