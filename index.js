import express from 'express'
import publicRouter from './routes/userRoutes.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', publicRouter)

app.use((req, res) => {
    res.status(404).send('Bad URL Request: Page Not Found')
})

const PORT = 3000
const HOST_NAME = '127.0.0.1'
app.listen(PORT, HOST_NAME, () =>{
    console.log(`Server running at http://${HOST_NAME}:${PORT}`)
})