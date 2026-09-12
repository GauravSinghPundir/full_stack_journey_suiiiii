//////An expreess is a series of middleware function  calls

const cors=require("cors");
const express=require("express");
const app=express();
app.use(cors());

///////////////////////////without using middlewares implementaion

//////this function is trying to checkm and act as a middlearw but it is not a middle ware 
// function isOldEnough(age) {
//     if(age>=14){
//         return true;
//     }else{
//         return false;
//     }
// }

////here in the route except its functionality is trying to hablde the route or request comming to like doing tasks inspite of the fac taht its fiunction is the onr thr=e request has reached it it just need to implemnnt the code rather than doing checking .ie. the person needs to ride directly no chevking at this poinbt, it is nit the function of the ride tio cmainatain the check also
// app.get("/ride1", function(req, res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg:"you are riding ride 1"
//         })
//     }else{
//         res.status(403).json({
//             msg:"you are not old enough to ride this"
//         })
//     }
// })
// app.listen(3000);




///////////after using middleware implementation


function isOldEnoughMiddleware(req, res, next){
    const age =req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.status(403).json({
            msg:"you are not old enough to ride this"
        })
    }
}


app.get("/ride1", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg:"you are riding ride 1"
    })
})
app.listen(3000);


///////if u have defined a middleware that needs to be checked for every rout e otr some specic route the u can use app.use(isOldEnoughMiddleware) and it will be checked for every route or u can use it in the specific route as shown above

////to do
/////rate limiter
///// error handling  middleware -->> it is thaat is defined at the end , so as to csatch the throwm error  throwed by a route handler, so as to control the error and only let user know the error has occured rather than exposing the details oif when and where the error occured. 
app.use(function(err, req, res, next){
    res.status(400).send({})
})

////// to study up next is authentication middleware 