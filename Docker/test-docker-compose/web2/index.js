const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.json({
        title:"web2",
        message_for_world:"Hello world",
        message_for_you:"Hello you"
    })
})
const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})