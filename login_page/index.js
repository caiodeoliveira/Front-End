const radio_input = window.document.querySelector('#radio').checked = false

radio_input.addEventListener('click', function() {
    if (radio_input.checked === true) {
        radio_input.checked = false
    }
})