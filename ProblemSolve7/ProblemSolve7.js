function find(arr)
{
    let leader =arr[arr.length -1]
    let leaders=[leader]
    for(let i=arr.length-2; i>=0; i--)
    {
        if(arr[i]>=leader)
        {
            leader=arr[i];
            leaders.push(leader);
        }
    }
    return leaders.reverse();
}
const A=[16,17,4,3,5,2];
const leader = find(A);
console.log(leader);
