let num=prompt("Give a number as input");
var arr=[];
// to print the numbers from  1 to till user given input: 

for(var i=1; i<=num;i++){
    arr[i-1]=i;
}
console.log(arr);

//Now calculate the sum of the arrays using reduce method

const sumoutput=arr.reduce((res,curr)=>{
    res= res+curr
    return res;
});

console.log(sumoutput);

//Now calculate the multiplication of each numbers present in the array:

const muloutput= arr.reduce((resm,currm)=>{
    resm= resm*currm;
    return resm;
})
console.log(muloutput);