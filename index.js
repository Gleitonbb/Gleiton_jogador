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
const enviarPbancoDados01 = async (jog)=>{
    try{
      const conexao = await conectar()
      const sql = 'INSERT INTO jogador01 (timeEscolhido01) VALUES (?)'
      const valores = [jog.timeEscolhido01]
      await conexao.query(sql, valores)
      console.log('dados inseridos no banco de dados')
    }catch{
      console.log('erro ao conectar com o banco de dados', error)
    }
  }

  const enviarPbancoDados02 = async (jog)=>{
    try{
      const conexao = await conectar()
      const sql = 'INSERT INTO jogador02 (timeEscolhido02) VALUES (?)'
      const valores = [jog.timeEscolhido02]
      await conexao.query(sql, valores)
      console.log('dados inseridos no banco de dados')
    }catch{
      console.log('erro ao conectar com o banco de dados', error)
    }
  }

  const enviarPbancoDados03 = async (jog)=>{
    try{
      const conexao = await conectar()
      const sql = 'INSERT INTO jogador03 (timeEscolhido03) VALUES (?)'
      const valores = [jog.timeEscolhido03]
      await conexao.query(sql, valores)
      console.log('dados inseridos no banco de dados')
    }catch{
      console.log('erro ao conectar com o banco de dados', error)
    }
  }
app.post('/gleitonjogador', (req, res)=>{
    const usuario = req.body
    enviarPbancoDados01(usuario)
  
    res.json({message: 'dados recebido e inserido no banco de dados com sucesso'})
})
app.listen(porta, ()=>{console.log('servidor rodando')})


