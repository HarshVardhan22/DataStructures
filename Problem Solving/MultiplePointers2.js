//Given a sorted array find number of unique values
//Eg. [1,1,1,1,1,1,1,1,2,2,2,2,2,2] ============ 2;

function uniqueValues(arr){
    let count = 1;
    let ptrLeft = 0;
    let left = 0;
    let right = 0;
    let ptrRight = arr.length-1;
    while(ptrLeft<arr.length/2){
        
        if(arr[ptrLeft]!==arr[ptrRight]) {  
             if( arr[ptrLeft]!==left || arr[ptrRight]!==right)
             count++;            
        }
        left = arr[ptrLeft];    
        right = arr[ptrRight];  
        ptrRight--;             
        ptrLeft++;              
    }
    return console.log(count); 
}

uniqueValues([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,2,3])