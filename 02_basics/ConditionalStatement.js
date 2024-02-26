// In this file we are discussing about conditional statements:

//If- else statement

let age=52;
if (age>=18) {
    console.log("You can Drive and boolean type = "+true);
}
else{
    console.log("You cannot Drive and boolean type = "+false);
}

//Take another example:

let mode1= "Light";
let color1;
if (mode1==="dark") {
    color1="black";
} else {
    color1="white";
}
console.log(color1);

//Else-If Statement:

let mode2= "yellow";
let color2;
if (mode2==="dark") {
    color2="black";
}
else if (mode2==="light") {
    color2="White";
}
else if (mode2==="yellow") { // By Else-If statement we can comapare multiple statements
    color2="Holud";
}
else{
    color2="Invalid mode";
}
console.log(color2);