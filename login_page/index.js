let visibility_on = window.document.querySelector('.material-icons')
let type_password = window.document.querySelector('.password')

function show_password() {
    if (type_password.type === 'password') {
        type_password.type = 'text';
        visibility_on.innerHTML = 'visibility'
    } else {
        type_password.type = 'password'
        visibility_on.innerHTML = 'visibility_off'
    }
}

// visibility_on.addEventListener('click', function() {
//     visibility_on.innerHTML = 'visibility_off';
//     type_password.type = password;
// })