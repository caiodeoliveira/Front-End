let visibility_on = window.document.querySelector('#visibility_icons')
let type_password = window.document.querySelector('.password')
let theme = window.document.querySelector('#theme_icon')

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
    if (theme.innerHTML === 'light_mode' && theme.id === 'theme_icon') {
        theme.innerHTML = 'dark_mode'
        theme.setAttribute('id', 'changeForDark')
    } else {
        theme.innerHTML = 'light_mode'
    }

}