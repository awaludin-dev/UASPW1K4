const form = document.forms['form-submit']
const submitButton = document.querySelector("#submitButton")
const scriptURL = 'https://script.google.com/macros/s/AKfycbzqh_4uTw0JJat7kSzjLubJnMCvQzM-uvSx98Qq19BbhyVEenVHyEEx6HGV8Quu13dB/exec'
const closeForm = document.querySelector("#floatingComponent")

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody, mode: 'cors'})
    .then(response => {
        closeForm.setAttribute("style", "display: block")
        submitButton.disabled = false 
    })
    .catch(error => {
        submitButton.disabled = false
    })
    form.reset()
})

function toggleComponent() {
    const component = document.getElementById('floatingComponent');
    if (component.style.display === 'none' || component.style.display === '') {
        component.style.display = 'block'; // Show the component
    } else {
        component.style.display = 'none'; // Hide the component
    }
}