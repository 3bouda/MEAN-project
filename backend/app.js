var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

const route = require('./routes/route');
//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/tasklist');
//on connection
mongoose.connection.on('connected',()=>{
    console.log('mongo connected');
})
mongoose.connection.on('error',(err)=>{
if(err){
    console.log('error in database'+err)
}
});

//port
const port =3000;

//add middeleware
app.use(cors());

//body parser
app.use(bodyParser.json());

//static files
//app.use(express.static(path.join(__dirname,'frontend')));

//routes
app.use('/api',route);

app.listen(port,()=>{
    console.log('Server connect'+port)
});