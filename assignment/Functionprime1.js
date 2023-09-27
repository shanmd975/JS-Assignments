// Create a function if the number is prime return the true otherwise return false.
function isPrime(x){
  // x=20;
  if(x<=1){
    return false;
  }
 for(let i=2; i<x; i=i+1){
  if(x % i== 0){
    return false;   
 }
 return true;
}
}
let x =11;
if(isPrime(x)){
  console.log("is the Prime number");
}
else{
  console.log("is not a Prime number");
}
