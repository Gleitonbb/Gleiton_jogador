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
  const TmVencedorDaRodada = "São Paulo"
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
 console.log(to1)
 console.log(to2)
 console.log(to3)

 const total = to1 + to2 + to3
 somaPontuacao.innerHTML = total
 

}

