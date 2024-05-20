// menu hamburguer

let menu = document.getElementById("menu")
let abrir = document.getElementById("abrir")
let fechar = document.getElementById("fechar")
let burger = document.querySelector(".burger")


function AbrirFechar(){
    if(menu.classList.contains("menu-fechado")){
        menu.classList.remove("menu-fechado")

        abrir.style.display = "none"

        fechar.style.display = "inline"

        burger.style.width = "250px"

        if (innerWidth <= 565){
            burger.style.width = "100%"
        }
        
    }
    else{
        menu.classList.add("menu-fechado")

        abrir.style.display = "inline"

        fechar.style.display = "none"

        burger.style.width = "50px"
        
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")
    fechar.style.display = "inline"
    abrir.style.display = "none"
}

// formulario

const formulario = (event) => {
    // coleta de dados

    let vnome = document.getElementById("name").value

    let vemail = document.getElementById("mail").value

    let vtexto = document.getElementById("txta").value

    // organização de dados
   
    let dadosform = {
        nome: vnome,
        email: vemail,
        descricao: vtexto                                                           
    }

    // enviar para api

    fetch("http://localhost:3000/solicitacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosform)
    })
    .then(resposta => {
        console.log(resposta)

        // limpar form
        document.querySelector("#contato form").reset()
        
        // aviso de sucesso 
        alert ("solicitação enviada com sucesso.")
    })

    .catch(erro => {
        console.error(erro)

        //  CASO ERRO - mostrar alert
        alert("Erro na requisição")
        
        })
        
    event.preventDefault()
}
