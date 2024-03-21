class Login{
   
    static logado = false
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static estilocss = null
    
    static config = {
        cor:"048",
        img:"./imagem/logoelefante.png"
    }
    
    //https://0c6d64f8-d9d1-4362-a614-ee8f597dd12c-00-ov347xiemmcw.riker.replit.dev/?matricula=123&senha=321
    
    
      static login = (config = null) =>{
        if(config!=null){
            this.config = config
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_naook=()=>{callback_naook()}
    //   this.endpoint += `?matricula=${mat}&senha=${pas}`
      this.estilocss =
".fundoLogin{ display: flex;  justify-content: center;  align-items: center; width: 100%; height: 100vh; position: absolute;  top: 0px; left: 0px; background-color: rgba(0,0,0,0.75);}"+
".baseLogin{ display: flex; justify-content: center; align-items: stretch; width: 50%; }"+
".logoLogin img{width:90%;  box-sizing:inherit;}"+
".elementosLogin{ display: flex; justify-content: center; flex-direction: column; align-items: flex-start; width: 100%; background-color: #eee;   padding: 10px; border-radius: 10px 0px 0px 10px;}"+
".LogoLogin{ display: flex; justify-content: center; align-items: center; width: 70%; background-color: #bbb; padding: 10px;}" +
".campoLogin{ display: flex; justify-content: flex-start; align-items: flex-start;  flex-direction: column; margin-bottom: 10px;}"+
".campoLogin input{ font-size: 18px; padding: 5px; background-color: #fff; }"+
".campoLogin label{font-size:18px;}"+
".botoesLogin{display: flex; justify-content: space-around; align-items: center; width: 100%;}"+
`.botoesLogin button{cursor: pointer; background-color:#${this.config.cor}; color: white; border-radius: 5px; padding: 10px 30px; }`+
".logoLogin { display: flex;  justify-content: center;  align-items: flex-end;  width: 100%; background-color: #eee; height: 100%;border-radius: 0px 10px 10px 0px;}"

const styleEstilo = document.createElement("style")
styleEstilo .setAttribute("id","styloLogin")
styleEstilo .setAttribute("rel","stylesheet")
styleEstilo .setAttribute("type","text/css")
styleEstilo .innerHTML = this.estilocss
document.head.appendChild(styleEstilo )


//------------html-------------------------------------

    const fundoLogin = document.createElement("div")
    fundoLogin.setAttribute("id","fundoLogin")
    fundoLogin.setAttribute("class","fundoLogin")
    document.body.prepend(fundoLogin)


    const baseLogin = document.createElement("div")
    baseLogin.setAttribute("id","baseLogin")
    baseLogin.setAttribute("class","baseLogin")
    fundoLogin.appendChild(baseLogin)

    const elementosLogin = document.createElement("div")
    elementosLogin.setAttribute("id","elementosLogin")
    elementosLogin.setAttribute("class","elementosLogin")
    baseLogin.appendChild(elementosLogin)

    const campoLoginUserName = document.createElement("div")
    campoLoginUserName.setAttribute("id","campoLoginUsername")
    campoLoginUserName.setAttribute("class","campoLogin")
    elementosLogin.appendChild(campoLoginUserName)

    const labelUserName = document.createElement("label")
    labelUserName.innerHTML = "Username"
    campoLoginUserName.appendChild(labelUserName)

    const inputUserName = document.createElement("input")
    inputUserName.setAttribute("id","f_username")
    inputUserName.setAttribute("type","text")
    inputUserName.setAttribute("name","f_username")
    campoLoginUserName.appendChild(inputUserName)


    const campoLoginSenha = document.createElement("div")
    campoLoginSenha.setAttribute("id","  campoLoginSenha")
    campoLoginSenha.setAttribute("class","campoLogin")
     elementosLogin.appendChild(campoLoginSenha)
 
     const labelsenha = document.createElement("label")
     labelsenha.innerHTML = "senha"
     campoLoginSenha.appendChild(labelsenha)
 
    const inputSenha = document.createElement("input")
    inputSenha.setAttribute("id","f_senha")
    inputSenha.setAttribute("type","password")
    inputSenha.setAttribute("name","f_senha")
     campoLoginSenha.appendChild(inputSenha)

     const botoesLogin =  document.createElement("div")
     botoesLogin.setAttribute("class","botoesLogin")
     elementosLogin.appendChild(botoesLogin)

     const btn_login = document.createElement("button")
     btn_login.setAttribute("id", "btn_login")
     btn_login.innerHTML = "Login"
     btn_login.addEventListener("click",(evt)=>{
       this.verificaLogin()
     })
     botoesLogin.appendChild(btn_login)

     const btn_cancelar = document.createElement("button")
     btn_cancelar.setAttribute("id", "btn_cancelar")
     btn_cancelar.innerHTML = "Cancelar"
     btn_cancelar.addEventListener("click",(evt)=>{
        this.fechar()
     })
     botoesLogin.appendChild(btn_cancelar)

     const logoLogin = document.createElement("div")
     logoLogin.setAttribute("id","logoLogin")
     logoLogin.setAttribute("class","logoLogin")
     baseLogin.appendChild(logoLogin)

     const imgLogologin = document.createElement("img")
     imgLogologin.setAttribute("src", this.config.img)
     imgLogologin.setAttribute("title","Mamute")
     logoLogin.appendChild(imgLogologin)



    }
    static verificaLogin = () =>{
        const mat = document.querySelector("#f_username").value
        const pas = document.querySelector("#f_senha").value
       
        const endpoint = `https://0c6d64f8-d9d1-4362-a614-ee8f597dd12c-00-ov347xiemmcw.riker.replit.dev/?matricula=${mat}&senha=${pas}`
         fetch(endpoint)
        .then(res => res.json())
        .then(res=>{
        if(res){
            this.logado = true
            this.matlogado = mat
            this.nomelogado = res.nome
            this.acessologado = res.acesso
            this.fechar()
        }else{
            this.logado = false
            this.matlogado = null
            this.nomelogado = null
            this.acessologado = null
            alert("senha incorreta")
         }
       })
        // if(mat == "123" && pas == "321"){
        //     return true
        // }else{
        //     return false
        // }
       
    }
    
    static fechar = () =>{
        const id_estiloLogin = document.querySelector("#styloLogin")
        id_estiloLogin.remove()
        const fundoLogin = document.querySelector("#fundoLogin")
        fundoLogin.remove()
 }
    
    }


export {Login}



