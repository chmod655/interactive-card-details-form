const cardHolder = document.getElementById('holder')
const alertHolder = document.getElementById('alertHolder')

const cardNumber = document.getElementById('cardNumberPrev')
const alertNumber = document.getElementById('alertNumber')

const inputHolder = document.getElementById('cardHolder')
const inputNumber = document.getElementById('cardNumber')

const expMonth = document.getElementById('expDateMonthPrev')
const alertMonth = document.getElementById('alertDateMonth')

const expYear = document.getElementById('expDateYearPrev')
const alertYear = document.getElementById('alertDateYear')

const codeCvc = document.getElementById('cvc')
const alertCvcCode = document.getElementById('alertCode')


const inputExpMonth = document.getElementById('expDateMonth')
const inputExpYear = document.getElementById('expDateYear')
const inputCVCcode = document.getElementById('cardCode')

const submitButton = document.getElementById('submitBtn')

// Events
inputHolder.addEventListener('input', inputHolderCheck)
inputNumber.addEventListener('input', inputNumberCheck)

inputExpMonth.addEventListener('input', inputDateExpMonth)
inputExpYear.addEventListener('input', inputDateExpYear)
inputCVCcode.addEventListener('input', inputCVC)


// submit
submitButton.addEventListener('click', (e) => {
    if((inputExpMonth == '' && inputExpMonth == null) ||
    (inputExpYear == '' && inputExpYear == null) ||
    (inputCVCcode == '' && inputCVCcode == null)) {
        e.preventDefault()
    }
})

// Function

// Cardholder - yy
function inputHolderCheck(e) {
    inputHolder.style.borderColor = 'hsl(278, 94%, 30%)'
    let format = e.target.value // se null é pq contem letras

    function onlyLetters(str) {
        return /^[a-zA-Z ]+$/.test(str);
    }

    function checkIfContainNumber(str) {
        return /\d/.test(str)
    }

    if (onlyLetters(format)) {

        cardHolder.textContent = format.trim()

        if (alertHolder.textContent) {
            alertHolder.textContent = ''
        }
    }

    else if (e.target.value == '') {
        cardHolder.textContent = 'Jane Appleseed'
        alertHolder.textContent = 'Can\'t be blank'
        e.target.value = ''
        inputHolder.textContent = ''
        inputHolder.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    else {
        cardHolder.textContent = 'Jane Appleseed'
        e.target.value = ''
        alertHolder.textContent = 'The name cannot contain a number'
        inputHolder.textContent = ''
        inputHolder.style.borderColor = 'hsl(0, 100%, 66%)'
    }
}

// Card Number - yy
function inputNumberCheck(e) {
    inputNumber.style.borderColor = 'hsl(278, 94%, 30%)'
    let format = e.target.value.match(/^[0-9]*$/g) // se null é pq contem letras

    if (format != null && format != '') {
        let format_to = format[0].match(/\d{0,3}\d/g)
        cardNumber.textContent = format_to.join(' ')
        cardNumber.style.letterSpacing = '3px'

        if (alertNumber.textContent) {
            alertNumber.textContent = ''
        }

    } else {
        cardNumber.textContent = '0000 0000 0000 0000'
        e.target.value = ''
        inputNumber.style.borderColor = 'hsl(0, 100%, 66%)'
        alertNumber.textContent = 'Wrong Format, numbers only'
    }
}

// Data Exp
// DateMonth
function inputDateExpMonth(e) {
    inputExpMonth.style.borderColor = 'hsl(278, 94%, 30%)'
    let format = e.target.value.match(/^[0-9]*$/g)
    if (format != null && format != '') {
        expMonth.textContent = format
        alertMonth.textContent = ''
    }
    else if (e.target.value == '') {
        expMonth.textContent = '00'
        alertMonth.textContent = 'Can\'t be blank'
        alertMonth.style.fontSize = '8pt'
        e.target.value = ''
        inputExpMonth.textContent = ''
        inputExpMonth.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    else {
        expMonth.textContent = '00'
        e.target.value = ''
        inputExpMonth.style.borderColor = 'hsl(0, 100%, 66%)'
        alertMonth.textContent = 'numbers only'
        alertMonth.style.fontSize = '8pt'
    }
}
// DateYear
function inputDateExpYear(e) {
    inputExpYear.style.borderColor = 'hsl(278, 94%, 30%)'
    let format = e.target.value.match(/^[0-9]*$/g)
    if (format != null && format != '') {
        expYear.textContent = format
        alertYear.textContent = ''
    }
    else if (e.target.value == '') {
        expYear.textContent = '00'
        alertYear.textContent = 'Can\'t be blank'
        alertYear.style.fontSize = '8pt'
        e.target.value = ''
        inputExpYear.style.borderColor = 'hsl(0, 100%, 66%)'
        inputExpYear.textContent = ''
    }
    else {
        expYear.textContent = '00'
        e.target.value = ''
        inputExpYear.style.borderColor = 'hsl(0, 100%, 66%)'
        alertYear.textContent = 'numbers only'
        alertYear.style.fontSize = '8pt'
    }
}

// CVC
function inputCVC(e) {
    inputCVCcode.style.borderColor = 'hsl(278, 94%, 30%)'
    let format = e.target.value.match(/^[0-9]*$/g)
    if (format != null && format != '') {
        codeCvc.textContent = format
        alertCvcCode.textContent = ''
    }
    else if (e.target.value == '') {
        codeCvc.textContent = '000'
        alertCvcCode.textContent = 'Can\'t be blank'
        alertCvcCode.style.fontSize = '8pt'
        e.target.value = ''
        inputCVCcode.textContent = ''
        inputCVCcode.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    else {
        codeCvc.textContent = '000'
        e.target.value = ''
        alertCvcCode.textContent = 'numbers only'
        alertCvcCode.style.fontSize = '8pt'
        inputCVCcode.style.borderColor = 'hsl(0, 100%, 66%)'
    }
}

// 
// Modal
const modalBox = document.getElementById('modal')

const gotoGitHub = document.getElementById('goToGit')
const closeModal = document.getElementById('closeModal')

window.addEventListener('load', (e) => {
    setTimeout(()=>{
        modalBox.style.display = 'flex'
    }, 1000)
})

closeModal.addEventListener('click', closeModalBox, {once: true})
function closeModalBox () {
    modalBox.style.display = 'none'
}

gotoGitHub.addEventListener('click', () => {
    window.open('http://github.com/chmod655', '_blank')
})