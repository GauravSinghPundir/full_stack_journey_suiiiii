// class Rectangle{
//     constructor(length,width,color){
//         this.length=length;
//         this.width=width;
//         this.color=color;
//     }
//     area(){
//         return this.length*this.width;
//     }
//     paint(){
//         console.log("the color of the rectangle is:",this.color);// console.log('painting $(this.color)');
//     }
// }

// const r1=new Rectangle(2,4,"red");
// const area=r1.area();
// console.log(area);


// basically java script has some predefined classes , so we can use them like date - related to day, time, month, year subjects,  map- is also as similar to objects , and that too of c++ similarly
// const now= new Date();
// console.log(now.getDay());
// console.log(now.getFullYear());

// let map=new Map();
// map.set('name','gaurav');
// map.set('age', 19);
// console.log(map.get('name'));


//promises ->> which is imply the cleaner syntax of callbacks in asynchronous functions
//promises ->> works ->> whatever is the first argument(mostly a function is paseed and only one argument it takes) and that arguments ->> firts argument(which also a function) is called then the prmoises basically ends and return or we can use .then(##) here the ##==firts argument's first argument 

// normal setTimeout(callback, 3000); // where callback is a function in itself

//promisified version on settimeout or promisified setTimeout

// function callback(resolve){
//     console.log("hello");
//     setTimeout(resolve , 3000);
// }                                   defined as per the definition
// let p=new Promise(callback);
// p.then(function resolve(){
//     console.log("completed");
// });

// defining a function clearfile->>> which infact is a promisified function
//steps 1. read file
//step 2. clear all the left and right extrem spaces 
//step 3. write that back to the file

// let fs=require('fs');
// function clearfile(){
//     let read=fs.readFile('a.txt','utf-8',function (err,data){
//         if(err){
//             console.log("error");
//         }
//         else{
//             console.log(data);
//             let updated=data.trim();
//             console.log("updated",updated);
//             fs.writeFile('a.txt',updated,function errrr(err){
//             if(err){
//                 console.log(err);
//             }
//             });
//         }
//     }); 
// }


// function Cleanfile(resolve){
//     console.log("we are going to clean the file now");
//     clearfile();
//     setTimeout(resolve,3000);

// }

// let f1=new Promise(Cleanfile);
// f1.then(function resolve (){
//     console.log("promisidfied");
// });

// const fs=require('fs');
// function readingfile(readingdata){
//     fs.readFile('a.txt','utf8', function (err,data){
//         if(data){
//             readingdata(data);
//         }
//     })
// }


// function promisifiedreadfile(){
//     return new Promise(readingfile);
// }

// let p1=promisifiedreadfile();
// function callback(contents){
//     console.log(contents); 
// }
// p1.then(callback);

//definition of promise , how actually works
// class promise2{
//     constructor(fn){
//     function afterdone(data){
//         this.resolve(data);
//     }
//     fn(afterdone.bind(this));
// }

//     then(callback){
//         this.resolve=callback;
//     }
// }
// let fs= require('fs');
// function readfile(resolve){
//     fs.readFile('a.txt','utf8',function(err,data){
//         if(data){
//             console.log("read data");
//             resolve(data);
//         }
//     })
// }

// function promisifiedsetimeout(){
//     return new promise2(readfile);
// }



// function callback(contents){
//     console.log("call backing as a promise ");
//     console.log(contents);
// }

// let p1=promisifiedsetimeout();
// p1.then(callback);


//settime out promksified definedd
function setTimeoutPromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time);
    })
}


function callback(){
    console.log("hello there");
}
setTimeoutPromisified(5000).then(callback);



