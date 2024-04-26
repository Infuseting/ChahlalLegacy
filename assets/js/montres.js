let slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let slideId = ["Carousel1", "Carousel2", "Carousel3", "Carousel4", "Carousel5", "Carousel6","Carousel7", "Carousel8", "Carousel9", "Carousel10", "Carousel11", "Carousel12"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

const buy = document.querySelectorAll(".btn-buy")

const cardBuy = document.querySelector(".card-buy")
const cardLocation = document.querySelector(".card-location")
buy.forEach((buys => {
  buys.onclick = function() {

    cardBuy.classList.remove("hidden")
  }
}))

const inputName = document.querySelector("#name")
const nameText = document.querySelectorAll(".name p")[0]
inputName.addEventListener("input", () => {
  const text = document.querySelector("#name").value
  nameText.textContent = text
});
const inputExpiration = document.querySelector("#expirationdate")
const expirationText = document.querySelectorAll(".name p")[1]
inputExpiration.addEventListener("input", () => {
  let text = inputExpiration.value;
  text = text.replace(/[^0-9]/g, '');
  console.log(text)
  if (text.length > 4) {
    text = text.slice(0, 4);
  }
  if (text.length >= 3) {
    text = text.slice(0, 2) + '/' + text.slice(2);
  }
  expirationText.textContent = text
  inputExpiration.textContent = text
});

const securityCodeInput = document.querySelector("#securitycode");
const cardInner = document.querySelector(".card-inner");
securityCodeInput.addEventListener("focus", () => {cardInner.classList.toggle("reverse");});
securityCodeInput.addEventListener("focusout", () => {cardInner.classList.toggle("reverse");});

const inputSecurityCode = document.querySelector("#securitycode")
const securityCodeText = document.querySelectorAll(".card-cvv p")[0]
inputSecurityCode.addEventListener("input", () => {
  let text = document.querySelector("#securitycode").value
  console.log(text)
  text = text.replace(/[^0-9]/g, '');
  console.log(text)
  if (text.length <= 3) {

    securityCodeText.textContent = text
  }
});

const inputCode = document.querySelector("#cardnumber");
const codeText = document.querySelectorAll(".card-no p");
inputCode.maxLength = 16;
inputCode.addEventListener("input", () => {
  let text = inputCode.value;
  text = text.replace(/[^0-9]/g, '');
  const segments = [
    text.slice(0, 4), 
    text.slice(4, 8),
    text.slice(8, 12), 
    text.slice(12, 16), 
  ];
  segments.forEach((segment, index) => {
    codeText[index].textContent = segment;
  });
});

const BtnContinue = document.querySelector(".btnCreditCardContinue")
BtnContinue.onclick = function() {
  cardBuy.classList.toggle("hidden")
  cardLocation.classList.toggle("hidden")
}