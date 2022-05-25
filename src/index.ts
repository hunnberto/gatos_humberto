import express from 'express'
import imagesRouter from './routes/imagenes'
import catsRouter from './routes/gatos'

const bodyParser = require('body-parser')
const runDB = require('./config/db')
const app = express()
const PORT = 3000

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.use(express.json())
app.use('/imagenes', imagesRouter)
app.use('/gatos', catsRouter)



app.get("/test", (_req, res) => {
    console.log("return console")
    res.send('test')
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})

runDB()