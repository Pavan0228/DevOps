import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path: ".env"
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.post('/api', (req, res) => {
    const { name } = req.body
    res.send(`Hello ${name}!`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})