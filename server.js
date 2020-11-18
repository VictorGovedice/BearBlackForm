const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.post('/cadastro', (req, res) => {
    console.log(req.body)
    res.send("<h1>.....Account successfully created 🐻 !!</h1>")
})

app.post('/acesso', (req, res) => {
    console.log(req.body)
    res.send("<h1>.....Welcome BearBlack 🐻 !!</h1>")
})

app.listen(3000, () => console.log('Started...'))