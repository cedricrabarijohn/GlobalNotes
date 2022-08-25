# How to implement nodejs jwt
## Prerequisites
```js
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
```

## inside .env
```js
ACCESS_TOKEN_SECRET = The access token secret
REFRESH_TOKEN_SECRET = The refresh token secret
```
## simple login function
```js
const username = req.body.username
const user = {name: username}
const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
res.json({accessToken: accessToken})
```

## AuthenticateToken function
```js
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
```
# Jwt with expiration and refresh_token
```js
function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'15s'})
}

app.post('login',(req, res) => {
    const username = req.body.username
    const user = {name: username}
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    res.json({accessToken: accessToken, refreshToken: refreshToken})
})
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
```
# Authentification flow
- Verify email and password
- Generate the token and the refreshToken if it's valid
- Send the token and the refreshToken to the cookie of the user by using cookie-parser (use httpOnly: true)
```js
    npm install cookie-parser

    const cookieParser = require('cookie-parser')

    app.use(cookieParser())

    res.cookie('token', token, {
        maxAge: 1000*60*60*24,
        httpOnly:true
    })
```
- To get the cookies
```js
	const cookies = req.cookies
```
- Create a function for each type of user to verify their role
create an endpoint to refresh the token 

-Front:
Sign up and Login Form













