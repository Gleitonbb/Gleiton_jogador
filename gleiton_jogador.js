// -----------------------time 1 ------------------------------------

const time = [...document.querySelectorAll(".ti1")]
const caixaMae01 = document.querySelector("#caixaComando01")
const caixaEscolhido = document.querySelector("#caixaEscolhido01")
const botao01 = document.querySelector("#botao01")
//times e pontuação de quem ganhou
let timee1 = ""
let timee2 = ""
let timee3 = ""
let pontuacao = 10

const SalvarTimeEscolhido = (timeEscolhido01) =>{
    localStorage.setItem("timeEscolhido", timeEscolhido01 )
}

const carregarTimeEscolhido = () =>{
    const timeEscolhido = localStorage.getItem("timeEscolhido")
    if(timeEscolhido){
    caixaEscolhido.innerHTML = `Time escolhido</br> <strong>${timeEscolhido}</strong>`
    }
}
carregarTimeEscolhido()
time.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const timeClicado = evt.target
        timeClicado.classList.toggle("selecionado01")
        time.forEach(Div=>{
           if(Div !== timeClicado)
           Div.classList.remove("selecionado01")
        })
    })
})
botao01.addEventListener("click",(evt)=>{
    const pegarTime = [...document.querySelectorAll(".selecionado01")]
    pegarTime.map((upu)=>{
        // aqui está vindo os times vindo do html
        let timeEscolhido01 = upu.textContent
        let dados = {
            timeEscolhido01
               }
             let cabecalho = {
              method: "POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(dados)
          }
              const endPoint = "http://localhost:3000/gleitonjogador01"
              fetch(endPoint, cabecalho)
              .then(res => res.json())
              .then(enviar=>{
    //s dados ja estão vindo do back end aqui
                  console.log(enviar)
                  console.log(timeEscolhido01)
                  caixaEscolhido.innerHTML = `Time escolhido</br> <strong>${timeEscolhido01}</strong>`
                  SalvarTimeEscolhido(timeEscolhido01)
              })

        console.log(timeEscolhido01)
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
       timeClicado2.classList.toggle("selecionado02")
       time2.forEach(Div02=>{
        if(Div02 !== timeClicado2)
        Div02.classList.remove("selecionado02")
       })
    })
})
botao2.addEventListener("click",(evt)=>{
    const pegarTime2 = [...document.querySelectorAll(".selecionado02")]
    pegarTime2.map((upu)=>{
        // aqui está vindo os times vindo do html
        const timeEscolhido02 = upu.textContent
        let dados = {
            timeEscolhido02
               }
             let cabecalho = {
              method: "POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(dados)
          }
              const endPoint = "http://localhost:3000/gleitonjogador02"
              fetch(endPoint, cabecalho)
              .then(res => res.json())
              .then(enviar=>{
                //s dados ja estão vindo do back end aqui
                  console.log(enviar)
                  caixaEscolhido2.innerHTML = `Time escolhido</br><strong> ${timeEscolhido02}</strong>`
              })
        console.log(timeEscolhido02)
      
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
       timeClicado3.classList.toggle("selecionado03")
       time3.forEach(Div03=>{
        if(Div03 !== timeClicado3)
        Div03.classList.remove("selecionado03")
       })
    })
})
botao3.addEventListener("click",(evt)=>{
    const pegarTime3 = [...document.querySelectorAll(".selecionado03")]
    pegarTime3.map((upu)=>{
        // aqui está vindo os times vindo do html
        let timeEscolhido03 = upu.textContent
        let dados = {
            timeEscolhido03
               }
             let cabecalho = {
              method: "POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(dados)
          }
              const endPoint = "http://localhost:3000/gleitonjogador03"
              fetch(endPoint, cabecalho)
              .then(res => res.json())
              .then(enviar=>{
                //s dados ja estão vindo do back end aqui
                  console.log(enviar)
                  caixaEscolhido3.innerHTML = `Time escolhido</br> <strong>${timeEscolhido03}</strong>`
              })
        console.log(timeEscolhido03)
        //-------------enviar para banco de dados-----------
   
   })
})


// const timesSelecionados = (timeEscolhido) =>{
//     let dados = {
//     timeEscolhido
//        }
//      let cabecalho = {
//       method: "POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(dados)
//   }
//       const endPoint = "http://localhost:3000/gleitonjogador"
//       fetch(endPoint, cabecalho)
//       .then(res => res.json())
//       .then(enviar=>{
//           console.log(enviar)
//       })

// }



