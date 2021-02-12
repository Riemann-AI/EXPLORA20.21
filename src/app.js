const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//pagina home
app.get('', (req, res) => {
    res.render('landing', {
        title: 'EXPLORA20.21 Home',
        name: '© 2021 Amedeo Ebolese'
    })
})

app.get('/Home', (req, res) => {
    res.render('testPage', {
        title: 'EXPLORA2021',
        name: '© 2021 Amedeo Ebolese'
    })
})

app.get('/Progetta', (req, res) => {
    res.render('testPage3', {
        title: 'Plan new Emotional Tracker',
        name: '© 2021 Amedeo Ebolese'
    })
})

app.get('/Progetta/path-1', (req, res) => {
    res.render('path1', {
        title: 'Plan new Emotional Tracker',
        name: '© 2021 Amedeo Ebolese'
    })
})

app.get('/Progetta/path-1/unlimited', (req, res) => {
    res.render('path1_unlimited', {
        title: 'Plan new Emotional Tracker',
        name: '© 2021 Amedeo Ebolese'
    })
})

app.get('/Progetta/path-1/time-limited', (req, res) => {
    res.render('path1_time_limited', {
        title: 'Plan new Emotional Tracker',
        name: '© 2021 Amedeo Ebolese'
    })
})

app.get('/impara', (req, res) => {
    res.render('faceDetectionPage', {
        title: 'Emotional Tracker',
        name: '© 2021 Amedeo Ebolese'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Esercitati',
        name: '© 2021 Amedeo Ebolese'
    })
})


// starting up the server:
app.listen(port, () => {
    console.log('Server is up on port 3000.')
})