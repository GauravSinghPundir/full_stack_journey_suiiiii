const express=require("express");
const app=express();


// function isValidNumberMiddleware(req, res , next){
//     const a=parseInt(req.params.a);
//     const b=parseInt(req.params.b);
//     if(a && b){
//         next();
//     } else{
//         res.status(400).json({
//             "Invalid Input": "Please provide valid numbers"
//         })
//     }
// }

// app.use(isValidNumberMiddleware);

app.get("/multiply/:a/:b", function(req, res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    const result=a*b;
    res.json({
        result: result
    })
});

app.get("/divide/:a/:b", function(req, res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    const result=a/b;
    res.json({
        result:result
    })
});

app.get("/add/:a/:b", function(req, res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    const result=a+b;
    res.json({
        result:result
    })
});

app.get("/subtract/:a/:b", function(req, res){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    const result=a-b;
    res.json({
        result:result
    })
});

app.use(function(err,req,res,next){
    res.status(400).json({})
})

app.listen(3000);