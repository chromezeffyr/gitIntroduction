const input = document.querySelector('input');
const log = document.getElementById('valores'); // ids de cards a mostrar

input.addEventListener('input', updateValue);

function updateValue(e) {
    Element.setAttribute("card", "active");
}