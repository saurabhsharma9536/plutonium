const express = require('express');
//const abc = require('../introduction/intro')
const router = express.Router();
const royal = require("../logger/looger")
 const royal2 = require("../util/helper")
 const royal3 = require("../validator/formatter")


router.get("/test-me", function(req,res){
    
     royal.welcome()
     royal2.printdate()
     royal3.lowercase

        res.send("this is my 1st API")
})

module.exports = router;
// adding this comment for no reason
