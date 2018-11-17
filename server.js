var http = require('http');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var rp = require('request-promise');

// credentials.json


var Uemail;
var Upassword;



/*
server.listen(80);
*/
/*
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
*/




		
io.on('connection', function (socket) 
{	
/*
	socket.on("signUpE", function(usersEmail)
	{
		Uemail = usersEmail;
		console.log(usersEmail);
		console.log(Uemail);
	});
	socket.on("signUpP", function(usersPass)
	{
		Upassword = usersPass;
		console.log(usersPass);
		console.log(Upassword);
	});
	socket.emit("checkSignUp", );
	*/
	/*
	socket.on("signIn", function()
	{
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	}
	socket.on("signOut", function()
	{
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}).catch(function(error) {
		  // An error happened.
		});
	}
	*/
})







/*
	IP : http://10.0.0.102:3000
*/
app.use(express.static(__dirname + '/public'));


server.listen(process.env.PORT || 3000, function () {
  console.log('Server listening at port %d 3000');
});

/*
server.listen(3000, function () {
  console.log('Server listening at port %d 3000');
});
*/
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(5000);
*/