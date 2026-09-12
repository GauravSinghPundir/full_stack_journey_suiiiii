
//way1 using sorting
//it is basically like sort the first st1, and then str2 so after sortign if they are equal so true else false
function sorted(str1){
    let arr1=[];
    for(let i=0;i<str1.length;i++){
        arr1.push(str1[i]);
    }
    arr1.sort();
    let sorted11="";
    for(let j=0;j<arr1.length;j++){
        sorted11+=arr1[j];
    }
    return sorted11;
}

function isAnagram(str1,str2){
    let sorted1=sorted(str1);
    let sorted2=sorted(str2);
    if(sorted1==sorted2) {return true;}
    else{
        return false;
    }

}

let s1="hello";
let s2="elloh";

console.log(isAnagram(s1,s2));

//rather than traversing and adding elemts to an array we can do thi ssimply using str.spilt(""); 
//rather that reading char from array and concatenating then we can simply do it using arr.join("")