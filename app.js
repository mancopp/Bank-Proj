// Background animation
const curve = document.querySelector(".curve");
window.addEventListener('mousemove', e => {
    let x = -(e.x - window.innerWidth / 2) / window.innerWidth * 12;
    let y = -(e.y - window.innerHeight / 2) / window.innerHeight * 6;
    curve.style.transform = "translate(" + x + "%, " + y + "%)";
})

// Main card design showcase
const mainCard = document.querySelector(".card");
const cardDesigns = [
    "./card_designs/1.jpg",
    "./card_designs/2.jpg",
    "./card_designs/3.jpg",
    "./card_designs/4.jpg",
    "./card_designs/5.jpg",
    "./card_designs/6.jpg"
];

let lastIndex = -1;
const interval = setInterval(() => {
    let i;
    do {
        i = Math.floor(Math.random() * (cardDesigns.length)); //Avoiding same picture over two cycles
    } while (i == lastIndex)
    mainCard.style.backgroundImage = "url(" + cardDesigns[i] + ")";
    lastIndex = i;
}, 1000);