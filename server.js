var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

//app.get('/', function(req, res){
//    res.send('Hello world from server.js')
//});

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.post('/savefile', function(req, res){
    console.log('I received a get request = ' + req.body.text);
    writeData('./public/files/sample.txt',req.body.text);
    res.send('method called');
});

app.get('/readfile', function(req, res){
    var srcPath = './public/files/sample.txt';
    fs.readFile(srcPath, 'utf8', function (err, data) {
        console.log("Data is: " + data);
        res.json(data);
    });
});

app.post('/calculatetax', function(req, res){
    //console.log('I received a get request = ' + req.body.text);
    var amount = req.body.amount;
    var percent = req.body.percent;
    var result = (percent/100)*amount;
    result = amount + result;
    res.json(result);
});

function writeData(savPath, text) {
    fs.writeFile(savPath, (text), function(err) {
            if (err) throw err;
            console.log('complete');
        }
    );
}

function readData(srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
        //if (err) throw err;
        console.log("Data is: " + data);
        return data;
    });
}

app.listen(3000);
console.log('Server running on port 3000');