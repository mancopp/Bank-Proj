// Background animation
const curve = document.querySelector(".curve");
window.addEventListener('mousemove', e => {
    let x = -(e.x - window.innerWidth / 2) / window.innerWidth * 12;
    let y = -(e.y - window.innerHeight / 2) / window.innerHeight * 6;
    curve.style.transform = "translate(" + x + "%, " + y + "%)";
})

// Getting cards
const mainCard = document.querySelector(".card");
const cardDesigns = [
    "./card_designs/1.jpg",
    "./card_designs/2.jpg",
    "./card_designs/3.jpg",
    "./card_designs/4.jpg",
    "./card_designs/5.jpg",
    "./card_designs/6.jpg"
];

// Main card design showcase
let lastIndex = -1;
if (cardDesigns.length > 0) {
    const interval = setInterval(() => {
        let i;
        do {
            i = Math.floor(Math.random() * (cardDesigns.length)); //Avoiding same picture over two cycles
        } while (i == lastIndex)
        mainCard.style.backgroundImage = "url(" + cardDesigns[i] + ")";
        lastIndex = i;
    }, 1000);
}

//Fill container with cards
//Change card bg
const displayCard = document.querySelector(".display");
const grid = document.querySelector(".grid");
if (cardDesigns.length > 0) {
    cardDesigns.forEach(element => {
        const div = document.createElement("div");
        div.className = "grid-design";
        div.addEventListener("click", function (event) {
            // this.style.border = "5px solid white";
            displayCard.style.backgroundImage = this.style.backgroundImage;
        });
        div.style.backgroundImage = "url(" + element + ")";
        grid.appendChild(div);
    });
} else {
    grid.innerText = "No designs for cards were loaded. Please try again later.";
}