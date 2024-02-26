//Write a code which can give grades to students accordong to their marks:

let marks= prompt("Enter Students Marks");
if (marks<=100 && marks>=90) {
    console.log("Grade= A+");
}
else if (marks<=89 && marks>=70) {
    console.log("Grade= A");
}
else if (marks<=69 && marks>=50) {
    console.log("Grade= B");
}
else if (marks<=49 && marks>=30) {
    console.log("Grade= C");
}
else if (marks<=29 && marks>=0) {
    console.log("Grade= F");
}