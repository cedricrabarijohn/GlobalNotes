# Implement postgresql in nodejs
Another one : https://www.youtube.com/watch?v=_n-Ai30C1qs&t=162s
## Cli command
```
npm install --save express pg cors
```
## index.js
```js
const cors = require('cors')
app.use(cors())
app.use(express.json())
```
## Connect to database:
### db.js:
```js
const Pool = require("pg").Pool;
const pool = new Pool({
	host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'testevaluation',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 3000
});

module.exports = pool;
```
### index.js :
```js
	const pool = require("./db")
```
## Request with routes:
```js
const pool = require("./db")
app.post("/todos",async(req,res)=>{
	try{
		const client = await pool.connect();
		const {description} = req.body
		const query = "Query here"
		const result = await client.query(query)
		client.release();
		res.json(result.rows);
	}catch(err){
		console.log(err.message)
	}
})
```
