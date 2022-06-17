// express js (REST API FRAMW EORK )
// get() post() put() patch() delete ()
let myJSON = {
    name: "hira",
    lastName : "hanif "
}

const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send(myJSON);
})


app.post('/',function(req,res){
    let  data = myJSON
    data.name="xyz";
    res.send(data);
})


app.put('/',function(req,res){
    myJSON.name="abc";
    myJSON.lastName="vbc";
    res.send(myJSON);
})


app.patch('/',function(req,res){
    myJSON.name="abc";
    res.send(myJSON);
})


app.delete('/',function(req,res){
    delete myJSON.name;

    res.send(myJSON);
})
 
 app.listen(8080);