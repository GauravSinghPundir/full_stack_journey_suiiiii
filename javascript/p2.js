// function sum(a,b){
//     return a+b;
// }

// console.log(sum(80,20));

// function sum_n(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }

// let ans1=5;
// let ans2=30;
// console.log(sum_n(ans1));

//reading data from the file 
//queries== if fs is declared as var, or data1, is declared let , and is double quote allowe dfor the file name
const fs= require('fs');
const data1=fs.readFileSync('a.txt','utf8');
// const data2=fs.readFileSync('b.txt','utf8');
console.log(data1);
// console.log(data2);


//function can be asynchronous also giving that control dosen't lock at some synchronous system, then so whenever it is like reading data, i/o operation always use asynchronous functions and in case of read file a synchronous function cabn be like that it gets a additional function which is a callbackj and asynchronous function can either have callbacks or they can use promises suh that a function promises that after this hapeens .then this will  nbe done