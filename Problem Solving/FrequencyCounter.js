//will be checking whether the given strings are anagram or not by using frequency counter

//Frequency counter is used to reduce the o(n)

function anagram (str1,str2){
    if(str1.length!==str2.length)
        return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of str1)
        freqCounter1[val] = (freqCounter1[val]||0)+1;

    for(let val of str2)
        freqCounter2[val] = (freqCounter2[val]||0)+1;
    
    for(let key in freqCounter2){
        
        if(!(key in freqCounter2))
            return false;
        
        if(freqCounter2[key]!==freqCounter1[key])
            return false;
        
        return true;
    }


}
console.log(anagram("tere mast mast do nain mere dil ka le gye chain","mere dil ka le gye chain tere mast mast do nain"));