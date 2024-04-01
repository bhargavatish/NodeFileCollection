const http = require('http')

const express  = require('express')

const app = express()

const adminRouter= require('./routes/admin')

const shopRouter= require('./routes/shop')

app.use('/admin',adminRouter)
app.use('/shop',shopRouter)

app.use((req,res,next) => {
    res.status(404).send('<h1> Page not found </h1>');
})



app.listen(5500)