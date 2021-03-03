const button1 = document.querySelector(".registers_button")
const button2 = document.querySelector(".entrances_button")

button1.addEventListener("click", function() {
    let email_box = document.querySelector(".email")
    let name_box = document.querySelector(".name")
    if (email_box.value == '' || name_box.value == '') {
        alert("Por favor, preencha todos os campos obrigatórios")
    } else {
        alert("Cadastro feito com sucesso! Redirecionando...")
        window.location.href = "home.html"

    }
})

function aviso2() {

    button2.addEventListener("click", function() {
        let name_login = document.querySelector(".entrances_name")
        let password_login = document.querySelector(".entrances_password")

        if (name_login.value == '' || password_login.value == '') {
            alert("Nome ou Senha não preenchidos")
        } else {
            alert("Redirecionando...")
            window.location.href = "home.html"
        }
    })

}


















/*function aviso() {

    document.querySelector(".registers_button")
    let email_box = document.querySelector(".email")
    let name_box = document.querySelector(".name")
    if (email_box.value == '' || name_box.value == '') {
        alert("Por favor, preencha todos os campos obrigatórios")
    } else {
        alert("Cadastro feito com sucesso! Redirecionando...")
        window.location.href = "home.html"

    }
}

function aviso2() {
    document.querySelector(".entrances_button")
    let name_login = document.querySelector(".entrances_name")
    let password_login = document.querySelector(".entrances_password")

    if (name_login.value == '' || password_login.value == '') {
        alert("Nome ou Senha não preenchidos")
    } else {
        alert("Redirecionando...")
        window.location.href = "home.html"
    }

}

function load() {
    document.getElementsByTagName("body")
    alert("Bem vindo a comunidade aberta do BrazilJS, No menu superior clicando em Open comunnity você será direcionado para a página oficial e clicando em um dos links no canto superior direito, você obtém mais informações sobre a comunidade")
}*/