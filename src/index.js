const express = require ('express')


const config = require('./config')

const app = express()

const setupViewEngine = require('./config/viewEngine')

setupViewEngine(app)

app.get('/', (req,res) => {
    res.send('Home Page')
})

app.get('/hbs' , (req,res) => {
    res.render('home' )
})

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`))