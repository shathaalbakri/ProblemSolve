function countFraction(numerator,denominator)
{
    let count=0;
    const fraction = numerator.map((num,index)=>[num,denominator[index]])

    for(let i=0; i<fraction.length; i++)
    {
        for(let j=i+1; j<fraction.length; j++)
        {
            const sum = fraction[i][0]/fraction[i][1]+fraction[j][0]/fraction[j][1];
            if(sum === 1)
            {
                count++;
            }
        }
    }
    return count;
}

const numerator=[1,2,2,8]
const denominator=[2,4,6,12]
const pair=countFraction(numerator,denominator);
console.log(pair);