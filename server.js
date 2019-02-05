const express = require('express'); //express.js framework
const hbs = require('hbs'); //handlebars.js

var app = express(); //express.js object

//setting partials (code snippets for inclusions and common use in multiple location of the project.)
hbs.registerPartials(__dirname+'/views/common');

app.use(express.static(__dirname + '/public')); //setting directory for static inclusions/usage
app.set('view engine','hbs'); //changing view engine for express to hbs

//handlebars helpers
hbs.registerHelper('makeBig',(text)=>{
	return text.toUpperCase();
});


//setting routes for root location of server
app.get('/',function(req,res){
	res.render('home.hbs',{
		pageHeading:'Home Page',
		data:'Welcome to my Home Page.'
	});
});

app.get('/about',function(req,res){
	res.render('about.hbs',{
		pageHeading:'About Us',
		data:'Web Artisans with CakePHP & node.js'
	});
});


app.listen('3001',()=>{
	console.log(':) Server Started on Port number 3001');
});
