# How to use mongodb with nodejs
## cli command
```cli
npm i --save mongoose
```
## create db/connection.js
```js
const mongoose = require('mongoose')
const URI = " THE URL PROVIDED BY THE WEBSITE "
//if localhost : const URI = 'mongodb://user:pass@hostname:27017/'
const connectDB = async() =>{
	await mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});
	console.log('db connected successfully')
}

module.exports = connectDB
```
- inside index.js or server.js:
	const connectDB = require(./db/connection)
	connectDB()
	app.use(express.json({extended:false}))

- create db/User.js:
	const mongoose = require('mongoose')
	const user = new mongoose.Schema({
		firstName:{
			type:String
		},
		lastName:{
			type:String
		}
	},{collection:'admin'})
	module.exports = User = mongoose.model('user',user)

- Create api/User.js
	const express = require('express')
	const mongoose = require('mongoose')
	const User = require('../db/User')
	const route = express.Router()

	route.post('/', async (req, res)=>{
		const{firstName, lastName} = req.body
		let user = {}
		user.firstName = firstName
		user.lastName = lastName
		let userModel = new User(user)
		await userModel.save()
		res.json(userModel)
	})
	module.exports = route

- inside server.js:
	app.use('api/userModel', require('./api/User'))

NEXT VIDEO TO SEE : 
	CRUD REST API using Node | Express | MongoDB
	https://www.youtube.com/watch?v=eYVGoXPq2RA