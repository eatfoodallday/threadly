var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./app/models/comments')
var MongoDB = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;

var dbHost = process.env.DB_HOST || 'localhost'
var dbPort = process.env.DB_PORT || 27017;
var dbName = process.env.DB_NAME || 'Threadly';

mongoose.connect('mongodb://localhost:27017/comments');

app = express(); //initialize express app

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(path.join(__dirname, 'app/')));

//put the message onto the database
app.post('/api', function(req, res) {
    
    //create new instance of comment
    var message = new Comment();
    
    //set the comment info
    message.comment = 'deleting comments';
    
    //save the comment to the data base
    message.save();
    res.json({message: "received get request"});   
});

//grab database from the database
app.get('/api', function(req, res){
   Comment.find(function(err, comments){
       res.json(comments);
   });
});

//delete comment from database
app.delete('/api', function(req, res){
   Comment.remove({},
   function(err, comment){
        res.json({message: "deleted"});
   });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

