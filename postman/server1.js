const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()

app.use(express.json())

const posts = [
  { name: "CBIT", title: "Welcome to CBIT" },
  { name: "MGIT", title: "Welcome to MGIT" },
  { name: "VBIT", title: "Welcome to VBIT" }
]

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]
  if (!token) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.post('/login', (req, res) => {
  const accessToken = jwt.sign({ name: req.body.username }, process.env.ACCESS_TOKEN)
  res.json({ accessToken })
})

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.name === req.user.name))
})

app.listen(3000)