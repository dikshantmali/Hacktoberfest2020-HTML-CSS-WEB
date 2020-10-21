
var express = require('express');
var app = express();

app.set('view engine','ejs');

var request = require('request');

// http://www.omdbapi.com/?apikey=thewdb&

app.get('/',function(req,res){
	res.render('home');
});

app.get('/results',function(req,res){
	var url = "http://www.omdbapi.com/?apikey=thewdb&s=";
	url += req.query.key;
	request(url,function(error,response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			res.render('results',{data: data});
		}
	});
});


app.listen(3000, function(){
	console.log('Movie App has started.');
});