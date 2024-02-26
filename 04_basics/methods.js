// Given an array of names in small alphabets, now make them into an array of big alphabets. 

arr=["dipan","gopa","srimany","rana"];

let output1 = arr.map((names)=>{ return names.toUpperCase();});

console.log(output1);


//You given an array of numbers of students, Filter out who scored 90+

arr=[92,85,23,96,12,94];

let output2=arr.filter(num=>{
    return num>90;
});

console.log(output2);