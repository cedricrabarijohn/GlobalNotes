const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.json({
	hello:"world"
    })
})
const PORT = 3001
app.listen(PORT,()=>{
	console.log(`Server listening on port ${PORT}`)
})
