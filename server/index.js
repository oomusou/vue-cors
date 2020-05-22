let express = require('express')
let cors = require('cors')

let app = express().use(cors())
let port = 3000

app.get('/hello-world', (req, res) => res.send('Hello World!'))

app.listen(port, _ => console.log(`Node listening on port ${port}!`))
