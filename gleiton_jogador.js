// -----------------------time 1 ------------------------------------

const time = [...document.querySelectorAll(".ti1")]
const caixaMae01 = document.querySelector("#caixaComando01")
const caixaEscolhido = document.querySelector("#caixaEscolhido01")
const botao = document.querySelector("#botao01")
//times e pontuação de quem ganhou
let timee1 = ""
let timee2 = ""
let timee3 = ""
let pontuacao = 10

time.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const timeClicado = evt.target
       timeClicado.classList.toggle("selecionado")
    })
})
botao.addEventListener("click",(evt)=>{
    const pegarTime = [...document.querySelectorAll(".selecionado")]
    pegarTime.map((upu)=>{
        // aqui está vindo os times vindo do html
        const timeEscolhido01 = upu.textContent
        console.log(timeEscolhido01)
        enviarBack()
        
    })
})

// -----------------------time 2-------------------------------------------

const time2 = [...document.querySelectorAll(".ti2")]
const caixaMae02 = document.querySelector("#caixaComando02")
const caixaEscolhido2 = document.querySelector("#caixaEscolhido02")
const botao2 = document.querySelector("#botao02")
//times e pontuação de quem ganhou

time2.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const timeClicado2 = evt.target
       timeClicado2.classList.toggle("selecionado")
    })
})
botao2.addEventListener("click",(evt)=>{
    const pegarTime2 = [...document.querySelectorAll(".selecionado")]
    pegarTime2.map((upu)=>{
        // aqui está vindo os times vindo do html
        const timeEscolhido02 = upu.textContent
        console.log(timeEscolhido02)
        enviarBack()
        
    })
})
//------------------------time3-----------------------------------
const time3 = [...document.querySelectorAll(".ti3")]
const caixaMae03 = document.querySelector("#caixaComando03")
const caixaEscolhido3 = document.querySelector("#caixaEscolhido03")
const botao3 = document.querySelector("#botao03")
//times e pontuação de quem ganhou

time3.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const timeClicado3 = evt.target
       timeClicado3.classList.toggle("selecionado")
    })
})
botao3.addEventListener("click",(evt)=>{
    const pegarTime3 = [...document.querySelectorAll(".selecionado")]
    pegarTime3.map((upu)=>{
        // aqui está vindo os times vindo do html
        const timeEscolhido03 = upu.textContent
        console.log(timeEscolhido03)
        enviarBack
   })
})

const enviarBack = () =>{
    let dados = {
        timeEscolhido01,
        timeEscolhido02,
        timeEscolhido03
    }
   let cabecalho = {
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(dados)
}
    const endPoint = "http://localhost:3000/gleitonjogador"
    fetch(endPoint, cabecalho)
    .then(res => res.json())
    .then(enviar=>{
        console.log(enviar)
    })
}





