const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')
const porta = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
    return global.conexao
    const con = await mysql.createConnection('mysql://root:123456@localhost:3306/gleitoncartola')
    console.log('conectado ao banco de dados')
    global.conexao = con
    return con
}
conectar()

