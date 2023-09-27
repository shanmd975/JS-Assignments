let number =13;
let count =0;
for(let i=2; i<number; i++)
{
    if(number % i==0)
    count++;
}
if(count>0)
{
    console.log("is not a prime number");
}
else{
    console.log("is a prime number");
}


