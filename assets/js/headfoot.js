const burgerMenu = document.querySelector(".burgerMenuLine");
burgerMenu.addEventListener("click", () => {
    const line1 = document.querySelector(".burgerMenuLine .line1");
    const line2 = document.querySelector(".burgerMenuLine .line2");
    const line3 = document.querySelector(".burgerMenuLine .line3");
    const burgerMenuItems = document.querySelector(".burgerMenu-items");
    line1.classList.toggle("active");
    line2.classList.toggle("active");
    line3.classList.toggle("active");
    burgerMenuItems.classList.toggle("active");
});