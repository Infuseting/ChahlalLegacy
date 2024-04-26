const search_bar = document.querySelector(".search-bar")
search_bar.addEventListener("input", () => search_bar_update());

function search_bar_update() {
    const text = document.querySelector(".search-bar").value.toLowerCase();
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((Cards) => {
        const h2Content = Cards.querySelector(".card-content h2").textContent.toLowerCase();
        console.log(h2Content)
        const wordsInH2 = h2Content.split(' ');
        const inputWords = text.split(' ');
        const isMatch = inputWords.every((inputWord) =>
            wordsInH2.some((word) => word.includes(inputWord))
        );
        if (isMatch) {
            Cards.style.display = "block"; 
        } else {
            Cards.style.display = "none"; 
        }
    });
}