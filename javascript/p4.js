// function promisified1(resolve){
//     console.log("set timeout promisified");
//     setTimeout(resolve,5000);
// }

// function settimeoutpromisified(){
//     return new Promise(promisified1);
// }


// function callback(){
//     console.log("callback function called back");
// }

// let p1=settimeoutpromisified();
// p1.then(callback);

// let fs=require('fs');

// function promisifiedfileread(){
//     return new Promise(function (resolve){
//         fs.readFile('a.txt','utf-8', function (err,data){
//             if(data){
//                 console.log("callback");
//                 resolve(data);
//             }
//         })
//     })

// }

// function callback(data){
//     console.log("data:");
//     console.log(data);
// }

// let p1=promisifiedfileread();
// p1.then(callback);


//callback hell example such that repeatedly calling back the function such that it becomes complex to understand
// function settimeoutpromisified(){
//     return new Promise(function (resolve){
//         setTimeout(function (){
//             console.log("after 1 sec");
//             setTimeout(function (){
//                 console.log("after 5 sec");
//                 setTimeout(function (){
//                     console.log("after 10 sec");
//                     resolve();
//                 },10000)
//             },5000);
//         },1000);
//     })
// }

// let p1=settimeoutpromisified();
// p1.then(function (){
//     console.log("all timeouts done");
// });

// function settimeoutpromisified(){
//     return new Promise(function(resolve){
//         console.log("after 5secs");
//         setTimeout(resolve,5000);
//     })
// }
// let p1 = settimeoutpromisified();
// p1.then(function (){
//     settimeoutpromisified(function(){
//         console.log("after 10secs");
//     },10000);
    
// }).then(function (){
//     console.log("all timeouts done");
// });
function settimeoutpromisified(dur){
    return new Promise(function (resolve){
        setTimeout(resolve,dur);
    })
}

async function solve(){
    await settimeoutpromisified(1000);
    console.log("after 1 sec");
    await settimeoutpromisified(4000);
    console.log("after 4 seconds");
    await settimeoutpromisified(2000);
    console.log("after 2 seconds");
    await settimeoutpromisified(3000);
    console.log("after 3 seconds");
}
solve();