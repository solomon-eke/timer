// get the array and select the values of the 2 and 3rd indexes

const args = process.argv;
const num1 = Number(args[2]);
const num2 = Number(args[3]);
setTimeout(function () {
  console.log(`${num1} seconds`);
  process.stdout.write("\x07");
}, num1);
setTimeout(function () {
  console.log(`${num2} seconds`);
  process.stdout.write("\x07");
}, num2);
