let number =13;
let count =0;
let i=2;
while(i<number)
{
    if(number % i==0)
    {
        count++;
        break;
    }
    i++;
}
if(count>0)
{
    console.log("is not prime number");
}
else{
    console.log("is a prime number");
}