import express from 'express'
import { UserRepository } from './use-repository.js'

const app = express()

app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send('HOLA MUNDO')
})

app.post('/login', (req, res) => {})

app.post('/register', (req, res) => {
  const { username, password } = req.body

  try {
    const result = UserRepository.create({ username, password })

    res.send({ result })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.post('/logout', (req, res) => {})

app.get('/protected', (req, res) => {})

app.listen(PORT, () => {
  console.log(`The server run in port ${PORT}`)
})
