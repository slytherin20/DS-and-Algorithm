function countingInversions(a){
    if(a.length<2) return [0,a];   //single element returns.
    else{
        let  mid,left,right,left_inv,right_inv,merged;
        let inversions = 0;
        mid= Math.floor(a.length/2); //Finding middle index.

       left = a.slice(0,mid);     //Dividing array into left and right.
       right = a.slice(mid,a.length);

       left_inv = countingInversions(left);   //returns left array inversions and sorted left array.
       right_inv = countingInversions(right); // returns right array inversions and sorted right array.

        inversions += + left_inv[0]+right_inv[0];

       merged = merge(left_inv[1],right_inv[1]); // Left and right sorted array are merged

       inversions = inversions +  merged[0]; //Total inversions
        return [inversions,merged[1]];
    }
}


function merge(left,right){
    let newArray=[];          //Temporary B array
    let ni=0;                 //No. of inversions
    let p=0;
    let k=0;
   while(p<left.length && k<right.length){//For counting inversions
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
   while(p<left.length){ //Copies remaining left array elements
       newArray.push(left[p]);
       p=p+1;
   }
   while(k<right.length){//Copies remaining right array elements.
       newArray.push(right[k]);
       k=k+1;
   }
   return [ni,newArray];//Returns no. of inversions and sorted array
}


console.log(countingInversions([50,20,5,70,30,15,11,18])[0]);