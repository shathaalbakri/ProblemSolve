function getNumber(arry,sum){
    for(let i=0; i<arry.length; i++)
    {
        for(var j=i+1; j<arry.length; j++)
        {
            if(arry[i]+arry[j]===sum)
            {
                // return[arry[i],sum[j]];
                return[sum];
            }
        }
    }
    return "No Matching Found"
}
console.log(getNumber([1,2,3,5,6],9))
