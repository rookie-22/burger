const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res)=>{
    burger.all((data)=>{
        console.log(data);
        res.render("index",{
            burgers:data
        });
    });
});

router.post("/api/burgers", (req,res)=>{
    burger.create([req.body.burger_name, req.body.devoured], (result)=>{
        res.json({burger_name:result.burger_name, devoured:0});
    });
});

router.put("/api/burgers/:id", (req,res)=>{
    console.log("HERE!: "+req.params.id);
    console.log(req.body);

    burger.update(req.params.id, req.body, (result)=>{
        if (result.changedRows === 0) {
            
            return res.status(404).end();
          }
          console.log(result);
          res.status(200).end();
    });
});

module.exports = router;
