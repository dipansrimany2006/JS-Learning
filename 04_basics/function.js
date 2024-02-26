//There are two ways to write "function" in java script:
// One is General Form and Other one is Compact Form.

//Normal Function/General Function

function mul(a,b){
    return a*b;
}
console.log(mul(2,4));


// Now time to apply the Arrow Function/Compact Form

const arrowmul=(a,b)=>{ // Define the arroe function, Here the arrowmul act as a constant.
    return a*b;
}
console.log(arrowmul(2,5)); // Call the arrowfunction, 2,5 will be alloted as a,b