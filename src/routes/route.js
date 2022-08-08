const express = require('express');
//const abc = require('../introduction/intro')
const router = express.Router();

let lodash = require('lodash')
const royal = require("../logger/looger")
 const royal2 = require("../util/helper")
 const royal3 = require("../validator/formatter")

 
    result4= lodash.fromPairs(arr4,1)
    console.log(result4)

let array =['january','february','march','april','may','june','july','august','september','octomber','november','december']
    let result1 =lodash.chunk(array,3)
    console.log(result1)
    //next 
    let arr2=[3,5,7,9,11,13,15,17,19,21]
    let result2 = lodash.tail(arr2,9)
    console.log(result2)
    //next 
    let arr3=[1,1,2,2,3]
    let result3 = lodash.union(arr3)
    console.log(result3)
    //next 
    let arr4 = [["horror","TheShining"],["drama","Titanic"],["fantasy","PansLabyrinth"]];
    let result4 = {}
router.get("/test-me", function(req,res){
    
     royal.welcome()
     royal2.printdate()
     royal3.lowercase

        res.send("this is my 1st API")
})




router .get('/student-details/:name', function(req, res){
        console.log("Thish is the request"+ JSON.stringify(req.params))
        let reqParams = req.params
        let studentName = reqprams.studentName
        console.log('Name of the student is ', studentName) 
        let studentDettails = studentName + " " + studentName
        res.send(studentDetails)
})

module.exports = router;
// adding this comment for no reason
//------------------1st proublem---ANSWER-----------------
 
router.get('/get-movies',function(req, res){ //student detail api he 
    let movies1= ["shole ","Rang de basanti","dil mange more","tiranga"]//api is implementation is used to send response for request
    res.send(movies1)//movies wala iske jese krna he
})

//--------------------------2nd proublem---- ANSWER-------------------
second wala problem code idhar he 
router.get('/get-movie/:indexNumber',function(req, res){ //student detail api he 
    
    let movies=['rang de basanti','The shining','Lord of the rings','batman begins']
    let index = req.params.indexNumber;
    console.log(movies[index])
     res.send(movies[index])
})
//---------------------3rd prouble---------ANSWER------------------------
router.get('/get-moviess/:indexNumber',function(req, res){ //student detail api he 
    
    let moviesName=['rang de basanti','The shining','Lord of the rings','batman begins']
    let index = req.params.indexNumber;

     if(index > moviesName.length){
        return res.send("use a valid index  ")
     }else{
    
     res.send(moviesName[index])
     }
})


//--------------------------------4th proublem------ANSWER------------------------
router.get('/get-/films',function(req, res){ //student detail api he    

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
 {"id": 2,"name": "Incendies"}, 
 {"id": 3,"name": "Rang de Basanti"},
  {"id": 4,"name": "Finding Nemo"}]
    res.send(moviesName)
})

//-------------------------------5th proublem---------ANSWER-----------------
router.get('/get-/films/:indexNumber',function(req, res){ //student detail api he    

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
 {"id": 2,"name": "Incendies"}, 
 {"id": 3,"name": "Rang de Basanti"},
  {"id": 4,"name": "Finding Nemo"}]
    let index = req.params.indexNumber;
     if(index > moviesName.length){
        return res.send("no movie exist with this id ")
     }else{
     res.send(moviesName[index])
     }
})
