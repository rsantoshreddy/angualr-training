var express = require("express");
var path = require("path");
var app = express();

app.use('/scripts', express.static(path.join(__dirname, 'scripts')))
app.use('/view', express.static(path.join(__dirname, 'view')))
app.use('/styles', express.static(path.join(__dirname, 'styles')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/services.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(3000);

console.log("Running at Port 3000");
