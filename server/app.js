const password = require('./password.js')
const express = require('express')
const app = express()
const OrientDB = require('orientjs');

const server = OrientDB(password.user);


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
	let _title = req.body.title.trim()
	let sql = 'INSERT INTO todoList (title) VALUES (:title)'
	db.query(sql,{
		params:{
			title: _title
		}
	})
	res.redirect('/')
})

app.delete('/api/:title',function(req,res){
	
	let _title = req.params.title.trim()
	
	let sql = 'DELETE FROM todoList WHERE title=:title'
	db.query(sql,{
		params: {
			title: _title
		}
	})
	
})
app.listen(3000,function(){
	console.log('app is listening at port 3000')
})