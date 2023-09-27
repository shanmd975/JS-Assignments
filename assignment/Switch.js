let i =3;
let result;

switch (i%2) {
  case 0:
    result = "even";
    break;
  case 1:
    result = "odd";
    break;
  default:
    result = "unknown";
}

console.log(`This is ${result}.`);
