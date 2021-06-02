let visibility_on = window.document.querySelector('#visibility_icons')
let type_password = window.document.querySelector('.password')
let theme = window.document.querySelector('#light_on')
let theme_container = window.document.querySelector('.light_container')
let body = window.document.querySelector('.body_light')

function show_password() {
    if (type_password.type === 'password') {
        type_password.type = 'text';
        visibility_on.innerHTML = 'visibility'
    } else {
        type_password.type = 'password'
        visibility_on.innerHTML = 'visibility_off'
    }
}

function foo_theme() {
    if (theme.innerHTML === 'light_mode') {
        theme.innerHTML = 'dark_mode'
        theme.setAttribute('id', 'dark_on')
        theme_container.setAttribute('class', 'dark_container')
        body.setAttribute('class', 'body_dark')
    } else {
        theme.innerHTML = 'light_mode'
        theme.setAttribute('id', 'light_on')
        theme_container.setAttribute('class', 'light_container')
        body.setAttribute('class', 'body_light')
    }

}