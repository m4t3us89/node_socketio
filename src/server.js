require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use( express.urlencoded( { extended:true } ) )
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

require('./routes').forEach(router=>router(app))
app.use('*',(req,res)=>res.status(404).send('Página não encontrada.'))

app.listen(process.env.PORT || 3333)