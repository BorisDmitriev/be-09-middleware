const express = require("express");
const app = express();
const logger = require('morgan')
const port = 3000


app.use(sendMessage)
app.use('/mid', sendMessage2)
app.use(logger('short'))
app.use(express.json())

function sendMessage(req, res, next){
    // res.send(`Request method: ${req.method} || Requested path: ${req.url}` )
    console.log("sendMessage");
    next()
}
function sendMessage2(req, res, next){
    // res.send(`Middleware with route => Request method: ${req.method} || Requested path: ${req.url}` )
    console.log("sendMessage2");
    next()
}

app.get( '/', (req, res) => {
    res.send("Hello there")
} )


app.get( '/mid', (req, res) => {
    res.send("Middleware test")
} )

app.post('/api', (req,res) => {
    console.log(req.body)
    res.status(200).send('fertig')
})



app.listen( port, () => {
    console.log(`http://localhost:${port}`);
} )

// For Code-Buddy
module.exports = { app };
