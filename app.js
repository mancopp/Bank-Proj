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
    "./card_designs/6.jpg",
    "./card_designs/7.png",
    "./card_designs/8.png"
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

//Change card by upload
document.querySelectorAll(".file").forEach(inputElement => {
    const dropArea = inputElement.closest(".drop-area");

    dropArea.addEventListener("click", (e) => {
        inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            console.log(inputElement.files)
            updateCard(inputElement.files[0]);
        }
    });

    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.classList.add("drop-area__over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropArea.addEventListener(type, (e) => {
            dropArea.classList.remove("drop-area__over");
        });
    });

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length == 1) {
            inputElement.files = e.dataTransfer.files;
            updateCard(inputElement.files[0])
        }
        dropArea.classList.remove("drop-area__over");
    });

});

function updateCard(fileData) {
    const displayUpload = document.querySelector(".upload-display");
    let fileReader = new FileReader();

    fileReader.onload = function (event) {
        displayUpload.style.backgroundImage = "url(" + event.target.result + ")";
    }
    fileReader.readAsDataURL(fileData);
}

//Back to top
const topButton = document.querySelector(".topBtn");
topButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
window.onscroll = () => {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

