let menu = document.getElementById("menu")
let abrir = document.getElementById("abrir")
let fechar = document.getElementById("fechar")
let burguer = document.getElementById("burguer")

function AbrirFechar(){
    if(menu.classList.contains("menu-fechado")){
        menu.classList.remove("menu-fechado")

        abrir.style.display = "none"

        fechar.style.display = "inline"
    }
    else{
        menu.classList.add("menu-fechado")

        abrir.style.display = "inline"

        fechar.style.display = "none"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")
    fechar.style.display = "inline"
    abrir.style.display = "none"
}
