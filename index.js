const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')
const porta = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconnected')
    return global.conexao
    const con = await mysql.createConnection('mysql://root:123456@localhost:3306/gleitoncartola')
    console.log('conectado ao banco de dados')
    global.conexao = con
    return con
}
const enviarPbancoDados01 = async (jog)=>{
    try{
      const conexao = await conectar()
      const sqlDelete01 = 'DELETE FROM jogador01'
      await conexao.query(sqlDelete01)
      const sql = 'INSERT INTO jogador01 (timeEscolhido01,pontuacaoparcial01) VALUES (?,?)'
      const valores = [jog.timeEscolhido01, jog.pontuacaoparcial01]
      await conexao.query(sql, valores)
      console.log('dados inseridos no banco de dados')
    }catch (error){
      console.log('erro ao conectar com o banco de dados', error)
    }
  }
 

  const enviarPbancoDados02 = async (jog02) =>{
    try{
    const conexao02 = await conectar()
    const sqlDelete02 = 'DELETE FROM jogador02'
    await conexao02.query(sqlDelete02)
    const sql02 = 'INSERT INTO jogador02 (timeEscolhido02, pontuacaoparcial02) VALUES (?,?)'
    const valores02 = [jog02.timeEscolhido02, jog02.pontuacaoparcial02]
    await conexao02.query(sql02, valores02)
    console.log('dados inseridos no banco de dados')
  }catch (error){
    console.log('erro ao acessar o banco de dados',error)
  }
  }

  const enviarPbancoDados03 = async (jog03) =>{
    try{
    const conexao03 = await conectar()
    const sqlDelete03 = 'DELETE FROM jogador03'
    await conexao03.query(sqlDelete03)
    const sql03 = 'INSERT INTO jogador03 (timeEscolhido03, pontuacaoparcial03) VALUES (?,?)'
    const valores03 = [jog03.timeEscolhido03, jog03.pontuacaoparcial03]
    await conexao03.query(sql03,valores03)
    console.log('dados inseridos no banco de dados com sucesso')
    }catch (error){
    onsole.log('erro ao acessar o banco de dados',error)
    }
  }
  const enviarPontuacaoTotal = async (jogTotal) =>{
    try{
     const conexaoTotal = await conectar()
     const sqlDeletetotal = 'DELETE FROM pontuacaoTotal'
     await conexaoTotal.query(sqlDeletetotal)
     const sqlTotal = 'INSERT INTO pontuacaoTotal (total) VALUES (?)'
     const valoresTotal = [jogTotal.total]
     await conexaoTotal.query(sqlTotal, valoresTotal)
     console.log('Dados inseridos no banco de dados com sucesso')
    }catch (error){
     console.log('erro ao conectar com banco de dados', (error))

    }
  }

app.post('/gleitonjogador01', (req, res)=>{
    const usuario = req.body
    enviarPbancoDados01(usuario)
    res.json({message: 'dados recebido e inserido no banco de dados com sucesso'})
})

app.post('/gleitonjogador02', (req, res)=>{
    const usuario02 = req.body
    enviarPbancoDados02(usuario02)
    res.json({message: 'dados recebido e inserido no banco de dados com sucesso'})
})

app.post('/gleitonjogador03', (req, res)=>{
  const usuario03 = req.body
  enviarPbancoDados03(usuario03)
  res.json({message: 'dados recebido e inserido no banco de dados com sucesso'})
})
app.post('/gleitonTotal', (req, res)=>{
  const usuarioTotal = req.body
  enviarPontuacaoTotal(usuarioTotal)
  res.json({mensage: 'dados recebido e inserido no banco de dados com sucesso'})
})

app.get('/gleitonjog01', async(req, res)=>{
  try{
    const conexao = await conectar()
    const [rows, fields] = await conexao.execute('SELECT * FROM jogador01')
    res.json(rows)

  }catch (error){

    console.log('Error ao conectar com o banco de dados,',error)
    res.status(500).json({error:'erro ao conectar com o banco de dados'})
  }
})

app.get('/gleitonjogador02', async(req, res)=>{
  try{
    const conexao02 = await conectar()
    const [rows, fields] = await conexao02.execute('SELECT * FROM jogador02')
    res.json(rows)

  }catch (error){

    console.log('Error ao conectar com o banco de dados,',error)
    res.status(500).json({error:'erro ao conectar com o banco de dados'})
  }
})

app.get('/gleitonjogador03', async(req, res)=>{
  try{
    const conexao03 = await conectar()
    const[rows, fields] = await conexao03.execute('SELECT *FROM jogador03')
    res.json(rows)
  }catch (error){
    console.log('Error ao conectar com o banco de dados,',error)
    res.status(500).json({error:'erro ao conectar com o banco de dados'})
  }
})
// -----------------levar dado do banco de bados para frontend--------------

app.listen(porta, ()=>{console.log(`servidor rodando na porta ${porta}`)})



