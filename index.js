const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000 || process.env.PORT

const presents = []

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json

app.post('/presents', (req, res, next) => {
    const present = req.body
    if (!present.name) {
        res.status(400).json({message: 'Name is not defined'})
        return
    }
    if (!present.description) {
        present.description = ''
    }
    if (!present.url) {
        present.url = ''
    }
    present.id = Date.now()
    present.isReserved = false
    presents.push(present)
    res.json(req.body)
})

app.get('/presents', (req, res) => {
    res.json(presents)
})

app.put('/presents', (req, res) => {
    const {id} = req.body
    if (!id) {
        res.status(400).json({message: 'ID id not defined'})
        return
    }
    if (typeof id !== 'number') {
        res.status(400).json({message: 'ID must be an integer'})
        return
    }
    const target = presents.find(el => el.id === id)
    if (!target) {
        res.status(400).json({message: `Present with id - ${id} was not found`})
        return
    }
    target.isReserved = true
    res.json(target)
})

app.listen(port, () => {
    console.log(`servers started on port ${port}`)
})
