const form = document.forms['formContact']
const submitButton = document.querySelector("#submitButton")
const scriptURL = 'https://script.google.com/macros/s/AKfycbx6n97guRSi8aE2HljAicJf9pt5tVCdj4UMHVwV0K0q4j_xP82HKkfc4v_mr8rKERQI/exec'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody, mode: 'cors'})
    .then(response => {
        alert('Success!', response)
        console.log(response)
        submitButton.disabled = false 
    })
    .catch(error => {
        alert('Error', error.message)
        console.log(error)
        submitButton.disabled = false
    })
    console.log(requestBody)
    form.reset()
})