const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.json({
        web3:"Hello from web3",
        message:"Ta gueule"
    })
})

const PORT = 3002
app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})