function countOdds(arr){

    let temp = [];

    function helper(arr){

        if(arr.length===0)
            return temp;
        
        if(arr[0]%2!==0)
            temp.push(arr[0])
        
        helper(arr.splice(1));                
    }
    helper(arr);

    console.log(temp);
}

countOdds([1,2,3,4,5,6,7,8,9]);
