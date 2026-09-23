const express=require("express");
const app=express();

app.get("/multiply", function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b);
    if( a && b){
        let product=a*b;
        res.json({
            "product":(product)
        })
    }
});

app.get("/add", function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b);
    if( a && b){
        let sum=a+b;
        res.json({
            "product":(sum)
        });
    }else{
        res.json({
            message:"there was an erroe with the inputs"
        });
        alert("check the inputs correctly");
    }
});

app.get("/divide", function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b);
    if( a && b){
        let division=a/b;
        res.json({
            "division":(division)
        })
    }
});

app.get("/subtract", function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(a && b){
        let subtraction=a-b;
        res.json({
            "subtraction":(subtraction)
        });
    }else{
        res.json({
            message:"there was an error wth your inputs"
        })
    }
});

app.listen(3000);