var express = require('express')
var app = express();

app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/pdf'));

app.get('/', function(req, res) {
	res.redirect("main.html"); //it's __dirname not _dirname

});

app.get("/aboutMe", function(req, res) {
	res.redirect("aboutMe.html");
});

app.get("/EComm", function(req, res) {
	res.redirect("EComm.html");
});

app.get("/progExer", function(req, res) {
	res.redirect("progExer.html");
});

app.get("/forum", function(req, res) {
	res.redirect("forum.html");
});

app.get("/restaurant", function(req, res) {
	res.redirect("restaurant.html");
});

app.get("/notes", function(req, res) {
	res.redirect("notes.html");
});

app.get("/contactMe", function(req, res) {
	res.redirect("contactMe.html");
});
app.get("/resume", function(req, res) {
	res.redirect("Resume.pdf")

})

app.listen('80')
console.log("Listing to port 80")


// when "express.static" is used with a relative path, "app.get" is combined with RES.REDIRECT("FILENAME")
// without "express.static" "app.get" is combined with "res.sendFile(__dirname + "/public/filename.html")""


