function heapSort(a){
    let n = a.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        max_heapify(a,i,n);            //Building max heap
    }
    for(let i = n-1;i>=0;i--){
        swap(a,0,i);              //Deleting root element
        max_heapify(a,0,i);           //Building max heap again
    }
    return a;
}

function max_heapify(a,i,n){
    let left = 2*i;              //Left child index
    let right = 2*i+1;           //Right child index
    let maximum;
    if(right<n){                 //Checks if right child exist
        if(a[left]>=a[right]){    //Compares children to find maximum
            maximum = left;
        }
        else{
            maximum = right;
        }
    }
    else if(left<n){                //Checks if left child exists
        maximum = left;
    }
    else return;                    //In case of no children return
    if(a[i]<a[maximum]){            //Checks if the largest child is greater than parent
        swap(a,i,maximum);          //If it is then swap both
        max_heapify(a,maximum,n);       //max-heapify again
    }
    return;
}

function swap(a,i,j){                 //Swap function
    let temp;
    temp = a[i];
    a[i] = a[j];
    a[j]=temp;
}

let arr = [1,4,7,2,87,23,45,90,12,54,76];
ar = heapSort(arr);
console.log(ar);