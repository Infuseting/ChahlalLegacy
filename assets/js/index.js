const left = document.querySelectorAll('.left');
left.forEach((div) => {
if (div.querySelector('img')) {
    div.classList.add('img');
}});

const right = document.querySelectorAll('.right');
right.forEach((div) => {
if (div.querySelector('img')) {
    div.classList.add('img');
}});