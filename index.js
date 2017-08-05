var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path'); //Node package for file paths
var bodyParser = require('body-parser');

//database connection using mongoose
mongoose.connect('mongodb://localhost:27017/samsungDb', function(err){
    if(err){
        console.log('Connection to db failed:', err);
    }else{
        console.log('Connected to db');
}
});

app.use(express.static(__dirname + '/client/dist/'));
//connect server to client index.html
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname +'/client/dist/index.html'));
});

//start server
app.listen(8080, function(){
    console.log('Listening on port 8080');
});