function bubbleSort(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length-i-1;j++){
            if(a[j]>a[j+1]){
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}

console.log(bubbleSort([2,1,4,3,6,5,7,8,10,9,45,23,67,98]))