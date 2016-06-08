var express = require('express')
var app = express();

app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.redirect("main.html"); //it's __dirname not _dirname

});

app.get("/aboutMe", function(req, res) {
	res.redirect("aboutMe.html");
});

app.get("/projectDetails", function(req, res) {
	res.redirect("projectDetails.html");
});

app.get("/contactMe", function(req, res) {
	res.redirect("contactMe.html");
});


app.listen('3000')
console.log("Listing to port 3000")


// when "express.static" is used with a relative path, "app.get" is combined with RES.REDIRECT("FILENAME")
// without "express.static" "app.get" is combined with "res.sendFile(__dirname + "/public/filename.html")""


