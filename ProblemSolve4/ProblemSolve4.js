function checkGender(userName)
{
    if(userName.length %2 === 0)
    {
        return "Girl";
    }
    else
    {
        return "Boy";
    }
}
console.log(checkGender("Ahmed"))
console.log(checkGender("Noor"))