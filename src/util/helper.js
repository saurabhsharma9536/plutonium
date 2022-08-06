function printdate(){
   let date = new Date()
   console.log(date.getDate())
   printmonth()
    
}
function printmonth(){
    let month = new Date()
    console.log(month.getMonth()+1)
    Batchinfo()
     
 }
 function Batchinfo(){
    console.log("my name is saurabh sharma")
 }

 module.exports.printdate = printdate


