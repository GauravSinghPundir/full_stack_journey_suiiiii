// function sum(a,b){
//     let sumtotal=a+b;
//     return sumtotal;
// }
// let ans=sum(5,7);
// console.log(ans);





// function isVote(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let ravi=18;
// console.log(isVote(ravi));

// function greet(user){
//     return "hello "+user.name1 +" of age :"+user.age;
// }
// let user1={
//     name1:"gg",
//     age:12

// }
// console.log(greet(user1));

// function greet(user){
//     if(user.gender=="male"){
//         console.log("hi "+"Mr."+user.name1+", your age is "+user.age);
//     }
//     if(user.gender=="female"){
//         console.log("hi "+"Mrs."+user.name1+", your age is "+user.age);
//     }
//     if(user.gender=="other"){
//         console.log("hi "+user.name1+", your age is "+user.age);
//     }
//     if(user.age>=18){
//         console.log("you are eligible to vote");
//     }
//     else{
//         console.log("you are not eligible to vote");
//     }
// }
// let user1={
//     name1:"gg",
//     age:12,
//     gender:"other"
// }
// greet(user1);

function adult(info){
    let arr=[];
    for(let i=0; i<info1.length;i++){
        if(info1[i].age>=18 && info1[i].gender=="male"){
            arr.push(info1[i]);
        }
    }
    return arr;
}

let info1=[
    {
        name1:"g",
        age:12,
        gender:"male"
    },{
        name1:"j",
        age:19,
        gender:"male"
    },{
        name1:"f",
        age:24,
        gender:"female"
    }
];
console.log(adult(info1));