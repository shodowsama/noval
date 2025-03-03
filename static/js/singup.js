const forms = document.getElementById('formsent')
const f_name = document.getElementById('firstname')
const e_input = document.getElementById('email-input')
const p_input = document.getElementById('password-input')
const r_p_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

forms.addEventListener('submit', (e) => {

    let error = []

    if (f_name) {
        error = getSignUpFormErrors(f_name.value, e_input.value, p_input.value, r_p_input.value)
    }
    else {
        error = getLogInFormErrors(e_input.value, p_input.value)
    }

    if (error.length > 0) {
        e.preventDefault()
        error_message.innerText = error.join('. ')

    }
})

function getSignUpFormErrors(f_name_s, e_input_s, p_input_s, r_p_input_s) {
    let error = []
    if (f_name_s === '' || f_name_s == null) {
        error.push('firstname is required')
        f_name.parentElement.classList.add('incorrect')
    }

    if (e_input_s === '' || e_input_s == null) {
        error.push('email is required')
        e_input.parentElement.classList.add('incorrect')
    }

    if (p_input_s === '' || p_input_s == null) {
        error.push('password is required')
        p_input.parentElement.classList.add('incorrect')
    }

    if (p_input_s !== r_p_input_s){
        error.push('password does not match')
        p_input.parentElement.classList.add('incorrect')
        r_p_input.parentElement.classList.add('incorrect')
    }

    return error
}

function getLogInFormErrors(e_input_s, p_input_s) {
    let error = []

    if (e_input_s === '' || e_input_s == null) {
        error.push('email is required')
        e_input.parentElement.classList.add('incorrect')
    }

    if (p_input_s === '' || p_input_s == null) {
        error.push('password is required')
        p_input.parentElement.classList.add('incorrect')
    }

    return error
}


const allinput = [f_name,e_input,p_input].filter(input => input != null)

allinput.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})

const oneinput = [r_p_input].filter(input => input != null)

oneinput.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
