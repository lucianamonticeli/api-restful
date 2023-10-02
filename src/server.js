const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


//conexao com o banco de dados
db.connect()

//habilita o CORS
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]

app.use(cors({
    origin: function (origin, callback) {
        let allowed = true

        // permite requests sem 'origin' - exemplo: mobile apps
        if (!origin)allowed = true
        
        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))


//habilita server para receber dados json
app.use(express.json())


//definindo as rotas
app.use('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listeing on port ${port}`))