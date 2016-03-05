'use strict'

const PORT = 8888
// const namesFilename = '/names.json'
const todosFilename = './todos.json'

var express = require('express');
var http = require('http');
var path = require ('path');
var bodyParser = require('body-parser');
var fs = require('fs')


var app = express();

var todoArr = []

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//********************
//respond with all todos in database - the json file
//1. read the json file
//2. parse the data into the array
//3. send the data - can send obj and arrays
app.get('/todos', function(req, res){
  fs.readFile(todosFilename, function(err, data){ //have the data
    todoArr = JSON.parse(data) //parse the data
    res.send(todoArr); //send the data
  })
})

app.get('/', function(req, res, next){
  res.sendFile( path.join(__dirname,'./index.html')); 
});

app.post('/todos', function(req, res){
  req.body.isCommpleted = false
  todoArr.push(req.body)
  fs.writeFile('todos.json', JSON.stringify(todoArr), function(err){
    res.send(todoArr)
  });
});




var server = http.createServer(app); //creating our server

server.listen(PORT, function(){   //this is the same as saying app.listen()but dont use it 
  console.log(`Server listening on port ${PORT}`)
});



app.delete('/todos/:index', function(req, res){
  req.params
  req.params.index
})

// app.get('/time', function(res, req){
//   var timestamp = Date.now();
//   res.send(timestamp.toString());
// });



// //push the newName into the array
// app.post('/names', function(req, res, next){
//   res.send(req.body.newName)
//   fs.readFile(namesFilename, function(err, data){
//     var names = JSON.parse(data);
//     names.push(req.body.newName);

//     fs.writeFile(namesFilename, JSON.stringify(names), function(err){
//       console.log('done');
//       res.send();
//     });
//   });
// });








