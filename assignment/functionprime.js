function isPrime(x){
    if(x==1) return false;
    for(let i=2; i<x; i=i+1){
    if(x%2==0) return false;
}
  return true;
}
for(let i=1; i<=100; i++)
{
    if(isPrime(i)==true)
    count++;
}
console.log(count);