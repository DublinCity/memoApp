const express = require('express')
const app = express()
const OrientDB = require('orientjs');

const server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'white7546'
});


const db = server.use('todo')
console.log('using database:',db.name)
 
// POST 를 받기위한 body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// 

app.get('/api',function(req,res){

	let sql ='SELECT FROM todoList'
	db.query(sql)
		.then(function(result){
			console.log(result.length)
			res.send(result)
		})
})

app.post('/api',function(req,res){
	let sql = 'INSERT INTO todoList (title) VALUES (:title)'
	db.query(sql,{
		params:{
			title: req.body.title
		}
	})
	res.redirect('/')
})

app.delete('/api/:title',function(req,res){
	let sql = 'DELETE FROM todoList WHERE title=:title'
	db.query(sql,{
		params: {
			title: req.params.title
		}
	})
	
})
app.listen(3000,function(){
	console.log('app is listening at port 3000')
})