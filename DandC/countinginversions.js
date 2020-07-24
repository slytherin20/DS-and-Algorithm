function countingInversions(a){
    if(a.length<2) return [0,a];
    else{
        let mid,left,right,left_inv,right_inv,merged;
        let inversions=0;
        mid = Math.floor(a.length/2);
        left = a.slice(0,mid);
        right = a.slice(mid,a.length);
        left_inv = countingInversions(left);
        right_inv = countingInversions(right);
        inversions = inversions+left_inv[0]+right_inv[0];
        merged = merge(left_inv[1],right_inv[1]);
        inversions = inversions + merged[0];
        return [inversions,merged[1]];
    }
}


function merge(left,right){
    let newArray=[];
    let ni=0;
    let p=0;
    let k=0;
   while(p<left.length && k<right.length){
       if(left[p]>right[k]){
           newArray.push(right[k]);
           ni = ni + left.length-p;
           k = k+1;
       }
       else{
           newArray.push(left[p]);
           p=p+1;
       }
   }
   while(p<left.length){
       newArray.push(left[p]);
       p=p+1;
   }
   while(k<right.length){
       newArray.push(right[k]);
       k=k+1;
   }
   return [ni,newArray];
}


console.log(countingInversions([50,20,5,70,30,15,11,18])[0]);