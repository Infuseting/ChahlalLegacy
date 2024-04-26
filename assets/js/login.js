const loginBtnUser = document.querySelector(".fa-user")
const login = document.querySelector(".login")
const closeBtnLogin = document.querySelector(".btnClose")
loginBtnUser.onclick = function() {
	login.classList.toggle("hidden")
}
closeBtnLogin.onclick = function() {
	login.classList.toggle("hidden")
}
