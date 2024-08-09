const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


app.get('/', (req,res) => {
    let num1 = parseInt(req.query.a)
    let num2 = parseInt(req.query.b)
    res.send((num1 + num2).toString())
})

app.listen(3000)