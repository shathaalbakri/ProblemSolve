function volume(h,r)
{
    return (1/3)*Math.PI*Math.pow(r,2)*h;
}
console.log(volume(7,4))

function volume1(h,r)
{
    let volume1=(1/3)*3.14*r*r*h;
    return volume1;
}
console.log(volume1(7,4))

function volume2(h,r)
{
    let volume2=(1/3)*3.14*r*r*h;
    console.log("volume =" +volume2)
}
volume2(7,4)

const getvolume3=(h,r)=>
{
    let volume3=(1/3)*3.14*r*r*h;
    console.log("volume =" +volume3);
}
console.log(getvolume3(7,4))

