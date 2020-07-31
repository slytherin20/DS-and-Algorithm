function bubbleSort(a){
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}

console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]));