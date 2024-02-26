// For given an array of numbers print the squre of each value using For each loop
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const calcsqr = (num) => {
  console.log(num ** 2);
};
arr.forEach(calcsqr); // In javascript we also can take functions as parameters or arguments, so here we use calsqr as parameter.

// given an array of strings , print them in uppercase using for each method:

names = ["dipan", "srimany", "parinita", "singha"];
const uppercase=(item) => {
   console.log(item.toUpperCase());
 }
names.forEach(uppercase);