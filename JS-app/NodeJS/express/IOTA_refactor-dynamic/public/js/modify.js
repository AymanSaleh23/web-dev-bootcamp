const expire = document.querySelector("#cb_exp")
const inputDate = document.querySelector("#DateToExp")

inputDate.addEventListener('change', function (event) {
    inputDate.setAttribute('value', event.target.value)
    console.log(inputDate.getAttribute('value'))

})

expire.addEventListener('click', function () {
    inputDate.toggleAttribute('disabled');
    console.log(inputDate.getAttribute('value'))

})

