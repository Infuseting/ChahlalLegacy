const btn = document.querySelectorAll('.btn')
const contact = document.querySelector('body .contact')
btn.forEach((div) => {
    div.onclick = function() {
        contact.classList.toggle("hidden")
    }
});