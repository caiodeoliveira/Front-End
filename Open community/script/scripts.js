const button1 = document.querySelector(".registers_button")
const button2 = document.querySelector(".entrances_button")

button1.addEventListener("click", function() {
    let email_box = document.querySelector(".email")
    let name_box = document.querySelector(".name")
    if (email_box.value == '' || name_box.value == '') {
        alert("Por favor, preencha todos os campos obrigatórios")
    } else {
        alert("Cadastro feito com sucesso! Redirecionando...")
        window.location.href = "https://www.braziljs.org/"

    }
})

function aviso2() {

    let name_login = document.querySelector(".entrances_name")
    let password_login = document.querySelector(".entrances_password")

    if (name_login.value == '' || password_login.value == '') {
        alert("Nome ou Senha não preenchidos")
    } else {
        alert("Redirecionando...")
        window.location.href = "https://www.braziljs.org/"
    }

}
