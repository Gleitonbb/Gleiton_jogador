
let caixaTimeEscolhido = document.querySelector("#caixaEscolido")
const caixaMae1 = document.querySelector("#caixaMae01")
const flamengo = document.querySelector("#timefla")
const palmeiras = document.querySelector("#timepal")
const botao1 = document.querySelector("#botao1")
const CaixaPontuacao = document.querySelector("#pontuacao1")
const textoTimeEscolhido = document.querySelector("#TextoEscolhido")
const somaPontuacao = document.querySelector("#pontuacaoTotal")
const pontuacao10A = 10
const semPontuacaoA = 0
const DoisTimes = [flamengo, palmeiras]
DoisTimes.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const FlaPal = evt.target
        FlaPal.classList.toggle("selecionado")
    
        tirarSelecionado1()
      
    })
})
botao1.addEventListener("click",(evt)=>{
    const timeSelecionado = [...document.querySelectorAll(".selecionado")]
    const timeSelecionadoretorno = [...document.querySelectorAll(".time:not(.selecionado)")]
    timeSelecionado.map((upu)=>{
        if(caixaTimeEscolhido.innerHTML === "Time Escolhido"){
            caixaTimeEscolhido.appendChild(upu)
        }else if(caixaTimeEscolhido.innerHTML === ""){
            caixaTimeEscolhido.appendChild(upu.cloneNode())
        }
      
        pontuacaoTimeEscolhido() 
        pontuacaoTotal()

        console.log(caixaMae1.firstElementChild.textContent)
    })
    timeSelecionadoretorno.map((upu, pos)=>{
     caixaMae1.appendChild(upu)
    })

})
  const VencedorDaRodada = `Palmeiras`
const pontuacaoTimeEscolhido = () =>{

 const ElementosDentroDaCaixa = [...document.querySelectorAll(".selecionado")]
ElementosDentroDaCaixa.map((upu, pos)=>{
    if(VencedorDaRodada === upu.textContent){
       CaixaPontuacao.innerHTML = pontuacao10A
    }else{
        CaixaPontuacao.innerHTML = semPontuacaoA
    }
}) 
}
const tirarSelecionado1  = () =>{
    
 flamengo.addEventListener("click",(evt)=>{
    if(flamengo.click){
        palmeiras.classList.remove("selecionado")
    }
 })
 palmeiras.addEventListener("click",(evt)=>{
    if(palmeiras.click){
        flamengo.classList.remove("selecionado")
    }
 })
}
// Time 02--------------------------------------
const pontuacao10B = 10
const semPontuacaoB = 0
const caixaMae2 = document.querySelector("#caixaMae02")
const timeSelecionado2 = document.querySelector("#caixaescolhido2")
const caixaPontuacao2 = document.querySelector("#pontuacao2")
const botao2 = document.querySelector("#botao2")
const SaoPaulo = document.querySelector("#timeVas")
const Vasco = document.querySelector("#timeSaoP")
 
const DoisTimes2 = [SaoPaulo, Vasco]
DoisTimes2.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const VascoSpaulo = evt.target
        VascoSpaulo.classList.toggle("selecionado2")
        tirarSelecionado2()
    })
})
  const TmVencedorDaRodada = "S.Paulo"
  botao2.addEventListener("click",(evt)=>{
    const clubeSelecionado = [...document.querySelectorAll(".selecionado2")]
    const clubeSelecionado2 = [...document.querySelectorAll(".time2:not(.selecionado2)")]
    clubeSelecionado.map((upu, pos)=>{
        if(timeSelecionado2.innerHTML === ""){
           timeSelecionado2.appendChild(upu) 
        }else if(timeSelecionado2.innerHTML === "Time Escolhido"){
            timeSelecionado2.appendChild(upu)
        }
        if(upu.textContent === TmVencedorDaRodada){
         caixaPontuacao2.innerHTML = pontuacao10B
        
        }else{
         caixaPontuacao2.innerHTML = semPontuacaoB
        }
      })
      clubeSelecionado2.map((upu)=>{
        caixaMae2.appendChild(upu)
      })

      pontuacaoTotal()
  })
  const tirarSelecionado2 = () =>{
    Vasco.addEventListener("click",(evt)=>{
        if(Vasco.click){
            SaoPaulo.classList.remove("selecionado2")
        }
    })
    SaoPaulo.addEventListener("click",(evt)=>{
        if(SaoPaulo.click){
            Vasco.classList.remove("selecionado2")
        }
    })
  }

//Time 03------------------------------------------------
const pontuacao10C = 10
const semPontuacaoC = 0
const TimeDaRodada = "Internacional"
const caixaTimeEscolhido3 = document.querySelector("#caixaescolhido3")
const caixaMae3 = document.querySelector("#caixaMae03")
const caixaPontuacao3 = document.querySelector("#pontuacao3")
const Internacional = document.querySelector("#timeInter")
const Fluminense = document.querySelector("#timeFlu")
const botao3 = document.querySelector("#botao3")

const TimesDois = [Internacional,Fluminense]

  TimesDois.map((upu, pos)=>{
    upu.addEventListener("click",(evt)=>{
        const TimeTime = evt.target
        TimeTime.classList.toggle("selecionado3")
        timeSelecionado3() 
      
    })
})
botao3.addEventListener("click",(evt)=>{
    const timeSelecionado3 = [...document.querySelectorAll(".selecionado3")]
    const timeNaoSelecionado = [...document.querySelectorAll(".time3:not(.selecionado3)")]
    timeSelecionado3.map((upu, pos)=>{
       if(caixaTimeEscolhido3.innerHTML === "Time Escolhido"){
           caixaTimeEscolhido3.appendChild(upu) 
        }
        if(upu.textContent === TimeDaRodada){
           caixaPontuacao3.innerHTML = pontuacao10C
        }else{
           caixaPontuacao3.innerHTML = semPontuacaoC
        }
    })
    timeNaoSelecionado.map((upu, pos)=>{
        caixaMae3.appendChild(upu)
    })
    pontuacaoTotal()
})
const timeSelecionado3 = () =>{
    Internacional.addEventListener("click",(evt)=>{
        if(Internacional.click){
            Fluminense.classList.remove("selecionado3")
        }
    }) 
    Fluminense.addEventListener("click",(evt)=>{
        if(Fluminense.click){
            Internacional.classList.remove("selecionado3")
           
        }
    })
}
const pontuacaoTotal = () =>{
 const pontuacao1 = document.querySelector("#pontuacao1")
 const pontuacao2 = document.querySelector("#pontuacao2")
 const pontuacao3 = document.querySelector("#pontuacao3")

 const to1 = parseInt( pontuacao1.textContent )
 const to2 = parseInt( pontuacao2.textContent )
 const to3 = parseInt( pontuacao3.textContent )
 const total = to1 + to2 + to3
 if(isNaN(total)){
    somaPontuacao.innerHTML = 'Aguarde o total de Pontuação'
 }else{
   somaPontuacao.innerHTML = total 
 }
}

// -------------------Placar dos Jogos001--------------------

        const caixacaixaPlacar1 = document.querySelector("#caixaPlacar1")
        const caixaResultadoAposta = document.querySelector("#caixaResultadoAposta1")
        const timeResultado1 = document.querySelector("#TimePlacar1")
        const timeResultado2 = document.querySelector("#TimePlacar2")

        const botaoResultado = document.querySelector("#botaoAposta")

        // let FlamengoResultado = "0"
        // let PalmeirasResultado = "0"

        botaoResultado.addEventListener("click",(evt)=>{
             const inpultResultado1 = document.querySelector("#time1").value
             const inpultResultado2 = document.querySelector("#time2").value

             caixaResultadoAposta.innerHTML = `${timeResultado1.textContent}-${inpultResultado1}<br/> ${timeResultado2.textContent}-${inpultResultado2}` 
             console.log(caixaResultadoAposta)
             resultado() 
             
             
         })

         const resultado = () =>{
        let Flamengo = 3
        let Palmeiras = 0
        const pon1 = 3
        const pon2 = 0
        const caixaResultado = document.querySelector("#caixaResultadoAposta1")
        const caixaPontos1 = document.querySelector("#caixaPontuacao1")
        if(caixaResultado.textContent === `Flamengo -${Flamengo}` && caixaResultado.textContent === `Palmeiras -${Palmeiras}`){
            caixaPontos1.innerHTML = pon1
        }else{
            caixaPontos1.innerHTML = pon2
        }
       
        console.log(caixaResultado.textContent)
        console.log(`Flamengo -${Flamengo}`)
        console.log(`Palmeiras -${Palmeiras}`)
         }
        
// -------------------Placar dos Jogos002----------------------
     
    const caixacaixaPlacar2 = document.querySelector("#caixaPlacar2")
    const caixaResultadoAposta2 = document.querySelector("#caixaResultadoAposta2")
    const timeResultado3 = document.querySelector("#TimePlacar3")
    const timeResultado4 = document.querySelector("#TimePlacar4")
    const botaoResultado2 = document.querySelector("#botaoAposta2")

    botaoResultado2.addEventListener("click",(evt)=>{
    const inputResultado3 = document.querySelector("#time3").value
    const inputResultado4 = document.querySelector("#time4").value
    caixaResultadoAposta2.innerHTML = `Resultado escolhido<br/>${timeResultado3.textContent}-${inputResultado3}<br/>${timeResultado4.textContent}-${inputResultado4}`
})