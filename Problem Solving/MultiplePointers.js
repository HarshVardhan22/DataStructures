//given a sorted array output the first pair which has sum =0;
//Eg. [-3,1,2,3] ======== [-3,3]
//Eg. [-3,-2,1,5,6] ====== undefined

//Normally we can approach this problem by suing two for loops which will be O(n^2)
//But by using multiple pointers mtd we can reduce this to O(n)

function sumZero(arr){
    let ptrLeft = 0;
    let ptrRight = arr.length-1;
    for(let index in arr){

        if(arr[ptrLeft]+arr[ptrRight]===0)
            return console.log([arr[ptrLeft],arr[ptrRight]]);
        
        else if(arr[ptrLeft]+arr[ptrRight]<0)
            ptrLeft++;
        
        else
            ptrRight--;
        
    }

    return "No such Pair";
    
}

sumZero([-6,-5,-2,0,1,2,3]);