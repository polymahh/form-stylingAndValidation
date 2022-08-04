function casheDom () {
    const form = document.querySelector('.form')
    const userName = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirm-password')
    const country = document.getElementById('country')
    const zipcode = document.getElementById('zip')
    
    form.addEventListener('submit' , (e)=> {
        e.preventDefault();
        checkInput();
    })

     return {userName, email, password, confirmPassword, country, zipcode}
};

const domElements = casheDom();

function checkInput () {
    
    const  userNameValue = domElements.userName.value
    const  emailValue = domElements.email.value
    const  passwordValue = domElements.password.value
    const  confirmPasswordValue = domElements.confirmPassword.value
    const  countryValue = domElements.country.value
    const  zipcodeValue = domElements.zipcode.value

    if (userNameValue === ''){
        setError(domElements.userName, 'UserName cant be empty')
    }else {
        setSuccess(domElements.userName)
    }

    if(emailValue === ''){
        setError(domElements.email, 'Email cant be empty')
    }else if (!emailCheck(emailValue)){
        setError(domElements.email, 'Email is not valid')
    }else {
        setSuccess(domElements.email)
    }

    if(passwordValue === ''){
        setError(domElements.password, 'Password cant be empty')
    }else if (!passwordCheck(passwordValue)){
        setError(domElements.password, 'Password must be eight characters, at least one letter and one number')
    }else {
        setSuccess(domElements.password)
    }

    if(confirmPasswordValue === ''){
        setError(domElements.confirmPassword, 'This field cant be empty')
    }else if (confirmPasswordValue !== passwordValue){
        setError(domElements.confirmPassword, 'Repeat Password here')
    }else {
        setSuccess(domElements.confirmPassword)
    }

    if (countryValue === ''){
        setError(domElements.country, 'country cant be empty')
    }else {
        setSuccess(domElements.country)
    }

    if(zipcodeValue === ''){
        setError(domElements.zipcode, 'This field cant be empty')
    }else {
        setSuccess(domElements.zipcode)
    }
    
    
}

function setError (input, message){

    const parentInput = input.parentNode
    parentInput.className = 'form-control error'

    const small = parentInput.querySelector('small')
    small.innerText = message
}

function setSuccess (input) {

    const parentInput = input.parentNode
    parentInput.className = 'form-control success'

}

function emailCheck (email){
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function passwordCheck (password){
    return password.match(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    )
}