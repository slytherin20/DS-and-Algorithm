function insertionSort(a){
    for(let i=0;i<a.length;i++){
        let key = a[i];
        let j=i-1;
        while(j>=0 && a[j]>key){
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = key;
    }
    return a;
}

console.log(insertionSort([3,2,5,1,6,8,4,10,14,13]));